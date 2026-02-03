import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';

const router = Router();

// GET /api/clients - List clients (admin only)
router.get('/', async (req: Request, res: Response) => {
    try {
        const { search, page = '1', limit = '20' } = req.query;

        const where = search ? {
            OR: [
                { name: { contains: search as string, mode: 'insensitive' as const } },
                { phone: { contains: search as string } },
                { email: { contains: search as string, mode: 'insensitive' as const } }
            ]
        } : {};

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

        const [clients, total] = await Promise.all([
            prisma.client.findMany({
                where,
                orderBy: { lastVisit: 'desc' },
                skip,
                take: parseInt(limit as string)
            }),
            prisma.client.count({ where })
        ]);

        res.json({
            clients,
            pagination: {
                page: parseInt(page as string),
                limit: parseInt(limit as string),
                total,
                pages: Math.ceil(total / parseInt(limit as string))
            }
        });
    } catch (error) {
        console.error('Get clients error:', error);
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
});

// GET /api/clients/:id - Get client with history
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const client = await prisma.client.findUnique({
            where: { id },
            include: {
                bookings: {
                    include: {
                        branch: true,
                        service: true
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 20
                }
            }
        });

        if (!client) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json({ client });
    } catch (error) {
        console.error('Get client error:', error);
        res.status(500).json({ error: 'Error al obtener cliente' });
    }
});

// PUT /api/clients/:id - Update client notes
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { notes, preferredBranchId } = req.body;

        const client = await prisma.client.update({
            where: { id },
            data: {
                ...(notes !== undefined && { notes }),
                ...(preferredBranchId !== undefined && { preferredBranchId })
            }
        });

        res.json({ client });
    } catch (error) {
        console.error('Update client error:', error);
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
});

export default router;
