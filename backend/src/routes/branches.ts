import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';

const router = Router();

// GET /api/branches - List all branches (public)
router.get('/', async (req: Request, res: Response) => {
    try {
        const branches = await prisma.branch.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
            include: {
                schedules: {
                    where: { isActive: true },
                    orderBy: { dayOfWeek: 'asc' }
                }
            }
        });

        res.json({ branches });
    } catch (error) {
        console.error('Get branches error:', error);
        res.status(500).json({ error: 'Error al obtener sucursales' });
    }
});

// GET /api/branches/:slug - Get branch by slug (public)
router.get('/:slug', async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;

        const branch = await prisma.branch.findUnique({
            where: { slug },
            include: {
                schedules: {
                    where: { isActive: true },
                    orderBy: { dayOfWeek: 'asc' }
                },
                branchServices: {
                    where: { isAvailable: true },
                    include: {
                        service: true
                    }
                },
                galleryItems: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' },
                    take: 12
                }
            }
        });

        if (!branch || !branch.isActive) {
            return res.status(404).json({ error: 'Sucursal no encontrada' });
        }

        res.json({ branch });
    } catch (error) {
        console.error('Get branch error:', error);
        res.status(500).json({ error: 'Error al obtener sucursal' });
    }
});

// POST /api/branches - Create branch (admin only)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, slug, address, phone, googleMapsUrl, imageUrl, maxBookingsPerDay } = req.body;

        if (!name || !slug || !address) {
            return res.status(400).json({ error: 'Nombre, slug y dirección son requeridos' });
        }

        // Check if slug exists
        const existing = await prisma.branch.findUnique({ where: { slug } });
        if (existing) {
            return res.status(400).json({ error: 'Ya existe una sucursal con ese slug' });
        }

        const branch = await prisma.branch.create({
            data: {
                name,
                slug: slug.toLowerCase(),
                address,
                phone,
                googleMapsUrl,
                imageUrl,
                maxBookingsPerDay: maxBookingsPerDay || 10
            }
        });

        // Create default schedule (Mon-Sat 9am-6pm)
        const defaultSchedules = [1, 2, 3, 4, 5, 6].map(day => ({
            branchId: branch.id,
            dayOfWeek: day,
            startTime: '09:00',
            endTime: '18:00',
            isActive: true
        }));

        await prisma.branchSchedule.createMany({ data: defaultSchedules });

        res.status(201).json({ branch });
    } catch (error) {
        console.error('Create branch error:', error);
        res.status(500).json({ error: 'Error al crear sucursal' });
    }
});

// PUT /api/branches/:id - Update branch (admin only)
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, address, phone, googleMapsUrl, imageUrl, maxBookingsPerDay, isActive, sortOrder } = req.body;

        const branch = await prisma.branch.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(address && { address }),
                ...(phone !== undefined && { phone }),
                ...(googleMapsUrl !== undefined && { googleMapsUrl }),
                ...(imageUrl !== undefined && { imageUrl }),
                ...(maxBookingsPerDay !== undefined && { maxBookingsPerDay }),
                ...(isActive !== undefined && { isActive }),
                ...(sortOrder !== undefined && { sortOrder })
            }
        });

        res.json({ branch });
    } catch (error) {
        console.error('Update branch error:', error);
        res.status(500).json({ error: 'Error al actualizar sucursal' });
    }
});

// DELETE /api/branches/:id - Delete branch (admin only)
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.branch.delete({ where: { id } });

        res.json({ success: true });
    } catch (error) {
        console.error('Delete branch error:', error);
        res.status(500).json({ error: 'Error al eliminar sucursal' });
    }
});

// PUT /api/branches/:id/schedule - Update branch schedule
router.put('/:id/schedule', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { schedules } = req.body; // Array of { dayOfWeek, startTime, endTime, isActive }

        if (!schedules || !Array.isArray(schedules)) {
            return res.status(400).json({ error: 'Horarios inválidos' });
        }

        // Delete existing schedules and create new ones
        await prisma.branchSchedule.deleteMany({ where: { branchId: id } });

        const newSchedules = schedules.map((s: { dayOfWeek: number; startTime: string; endTime: string; isActive?: boolean }) => ({
            branchId: id,
            dayOfWeek: s.dayOfWeek,
            startTime: s.startTime,
            endTime: s.endTime,
            isActive: s.isActive ?? true
        }));

        await prisma.branchSchedule.createMany({ data: newSchedules });

        res.json({ success: true });
    } catch (error) {
        console.error('Update schedule error:', error);
        res.status(500).json({ error: 'Error al actualizar horarios' });
    }
});

export default router;
