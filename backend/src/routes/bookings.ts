import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';
import { BookingStatus } from '@prisma/client';

const router = Router();

// GET /api/bookings - List bookings (admin only, with filters)
router.get('/', async (req: Request, res: Response) => {
    try {
        const { branchId, status, date, page = '1', limit = '20' } = req.query;

        const where: Record<string, unknown> = {};
        if (branchId) where.branchId = branchId;
        if (status) where.status = status;
        if (date) {
            const dateObj = new Date(date as string);
            where.OR = [
                { requestedDate: dateObj },
                { confirmedDateTime: { gte: dateObj, lt: new Date(dateObj.getTime() + 86400000) } }
            ];
        }

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

        const [bookings, total] = await Promise.all([
            prisma.booking.findMany({
                where,
                include: {
                    client: true,
                    branch: true,
                    service: true
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: parseInt(limit as string)
            }),
            prisma.booking.count({ where })
        ]);

        res.json({
            bookings,
            pagination: {
                page: parseInt(page as string),
                limit: parseInt(limit as string),
                total,
                pages: Math.ceil(total / parseInt(limit as string))
            }
        });
    } catch (error) {
        console.error('Get bookings error:', error);
        res.status(500).json({ error: 'Error al obtener citas' });
    }
});

// GET /api/bookings/pending - Get pending bookings count
router.get('/pending', async (req: Request, res: Response) => {
    try {
        const count = await prisma.booking.count({
            where: { status: 'PENDING' }
        });

        res.json({ count });
    } catch (error) {
        console.error('Get pending count error:', error);
        res.status(500).json({ error: 'Error' });
    }
});

// POST /api/bookings - Create booking request (public)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { clientName, clientPhone, clientEmail, branchId, serviceId, requestedDate, clientNotes } = req.body;

        if (!clientName || !clientPhone || !branchId || !serviceId || !requestedDate) {
            return res.status(400).json({ error: 'Nombre, teléfono, sucursal, servicio y fecha son requeridos' });
        }

        // Find or create client
        let client = await prisma.client.findUnique({ where: { phone: clientPhone } });

        if (!client) {
            client = await prisma.client.create({
                data: {
                    name: clientName,
                    phone: clientPhone,
                    email: clientEmail
                }
            });
        } else {
            // Update name if different
            if (client.name !== clientName) {
                client = await prisma.client.update({
                    where: { id: client.id },
                    data: { name: clientName, email: clientEmail || client.email }
                });
            }
        }

        const booking = await prisma.booking.create({
            data: {
                clientId: client.id,
                branchId,
                serviceId,
                requestedDate: new Date(requestedDate),
                clientNotes,
                status: 'PENDING'
            },
            include: {
                client: true,
                branch: true,
                service: true
            }
        });

        // TODO: Send WhatsApp confirmation to client (will implement in automation phase)

        res.status(201).json({
            booking,
            message: 'Tu solicitud ha sido recibida. Te confirmaremos pronto por WhatsApp.'
        });
    } catch (error) {
        console.error('Create booking error:', error);
        res.status(500).json({ error: 'Error al crear solicitud de cita' });
    }
});

// PUT /api/bookings/:id/approve - Approve booking (admin)
router.put('/:id/approve', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { confirmedDateTime, adminNotes } = req.body;

        if (!confirmedDateTime) {
            return res.status(400).json({ error: 'Fecha y hora confirmada es requerida' });
        }

        const booking = await prisma.booking.update({
            where: { id },
            data: {
                status: 'CONFIRMED',
                confirmedDateTime: new Date(confirmedDateTime),
                adminNotes
            },
            include: {
                client: true,
                branch: true,
                service: true
            }
        });

        // TODO: Send WhatsApp confirmation to client

        res.json({ booking, message: 'Cita confirmada' });
    } catch (error) {
        console.error('Approve booking error:', error);
        res.status(500).json({ error: 'Error al aprobar cita' });
    }
});

// PUT /api/bookings/:id/counter-offer - Send counter offer (admin)
router.put('/:id/counter-offer', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { proposedDateTime, adminNotes } = req.body;

        if (!proposedDateTime) {
            return res.status(400).json({ error: 'Fecha y hora propuesta es requerida' });
        }

        const booking = await prisma.booking.update({
            where: { id },
            data: {
                status: 'COUNTER_OFFER',
                proposedDateTime: new Date(proposedDateTime),
                adminNotes
            },
            include: {
                client: true,
                branch: true,
                service: true
            }
        });

        // TODO: Send WhatsApp counter offer to client

        res.json({ booking, message: 'Contrapropuesta enviada' });
    } catch (error) {
        console.error('Counter offer error:', error);
        res.status(500).json({ error: 'Error al enviar contrapropuesta' });
    }
});

// PUT /api/bookings/:id/reject - Reject booking (admin)
router.put('/:id/reject', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { adminNotes } = req.body;

        const booking = await prisma.booking.update({
            where: { id },
            data: {
                status: 'REJECTED',
                adminNotes
            },
            include: {
                client: true,
                branch: true,
                service: true
            }
        });

        // TODO: Send WhatsApp rejection to client

        res.json({ booking, message: 'Cita rechazada' });
    } catch (error) {
        console.error('Reject booking error:', error);
        res.status(500).json({ error: 'Error al rechazar cita' });
    }
});

// PUT /api/bookings/:id/complete - Mark as completed (admin)
router.put('/:id/complete', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const booking = await prisma.booking.update({
            where: { id },
            data: { status: 'COMPLETED' },
            include: { client: true }
        });

        // Update client stats
        await prisma.client.update({
            where: { id: booking.clientId },
            data: {
                totalVisits: { increment: 1 },
                lastVisit: new Date()
            }
        });

        // TODO: Send WhatsApp follow-up message

        res.json({ booking, message: 'Cita marcada como completada' });
    } catch (error) {
        console.error('Complete booking error:', error);
        res.status(500).json({ error: 'Error al completar cita' });
    }
});

// PUT /api/bookings/:id/no-show - Mark as no-show (admin)
router.put('/:id/no-show', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const booking = await prisma.booking.update({
            where: { id },
            data: { status: 'NO_SHOW' }
        });

        res.json({ booking, message: 'Cita marcada como no presentada' });
    } catch (error) {
        console.error('No-show booking error:', error);
        res.status(500).json({ error: 'Error' });
    }
});

export default router;
