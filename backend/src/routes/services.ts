import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';

const router = Router();

// GET /api/services - List all services (public)
router.get('/', async (req: Request, res: Response) => {
    try {
        const { category, branchId } = req.query;

        const services = await prisma.service.findMany({
            where: {
                isActive: true,
                ...(category && { category: category as string }),
                ...(branchId && {
                    OR: [
                        { isGlobal: true },
                        { branchServices: { some: { branchId: branchId as string, isAvailable: true } } }
                    ]
                })
            },
            orderBy: [
                { category: 'asc' },
                { sortOrder: 'asc' }
            ]
        });

        res.json({ services });
    } catch (error) {
        console.error('Get services error:', error);
        res.status(500).json({ error: 'Error al obtener servicios' });
    }
});

// GET /api/services/categories - Get distinct categories
router.get('/categories', async (req: Request, res: Response) => {
    try {
        const categories = await prisma.service.findMany({
            where: { isActive: true },
            select: { category: true },
            distinct: ['category']
        });

        res.json({ categories: categories.map(c => c.category) });
    } catch (error) {
        console.error('Get categories error:', error);
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
});

// GET /api/services/:id - Get service by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const service = await prisma.service.findUnique({
            where: { id },
            include: {
                branchServices: {
                    where: { isAvailable: true },
                    include: { branch: true }
                }
            }
        });

        if (!service || !service.isActive) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }

        res.json({ service });
    } catch (error) {
        console.error('Get service error:', error);
        res.status(500).json({ error: 'Error al obtener servicio' });
    }
});

// POST /api/services - Create service (admin only)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, description, price, durationMinutes, category, imageUrl, isGlobal } = req.body;

        if (!name || !price || !category) {
            return res.status(400).json({ error: 'Nombre, precio y categoría son requeridos' });
        }

        const service = await prisma.service.create({
            data: {
                name,
                description,
                price,
                durationMinutes: durationMinutes || 60,
                category,
                imageUrl,
                isGlobal: isGlobal ?? true
            }
        });

        res.status(201).json({ service });
    } catch (error) {
        console.error('Create service error:', error);
        res.status(500).json({ error: 'Error al crear servicio' });
    }
});

// PUT /api/services/:id - Update service (admin only)
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, price, durationMinutes, category, imageUrl, isGlobal, isActive, sortOrder } = req.body;

        const service = await prisma.service.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(description !== undefined && { description }),
                ...(price !== undefined && { price }),
                ...(durationMinutes !== undefined && { durationMinutes }),
                ...(category && { category }),
                ...(imageUrl !== undefined && { imageUrl }),
                ...(isGlobal !== undefined && { isGlobal }),
                ...(isActive !== undefined && { isActive }),
                ...(sortOrder !== undefined && { sortOrder })
            }
        });

        res.json({ service });
    } catch (error) {
        console.error('Update service error:', error);
        res.status(500).json({ error: 'Error al actualizar servicio' });
    }
});

// DELETE /api/services/:id - Delete service (admin only)
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.service.delete({ where: { id } });

        res.json({ success: true });
    } catch (error) {
        console.error('Delete service error:', error);
        res.status(500).json({ error: 'Error al eliminar servicio' });
    }
});

export default router;
