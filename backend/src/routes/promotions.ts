import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';

const router = Router();

// GET /api/promotions - List active promotions (public)
router.get('/', async (req: Request, res: Response) => {
    try {
        const { branchId } = req.query;
        const today = new Date();

        const where: Record<string, unknown> = {
            isActive: true,
            startDate: { lte: today },
            endDate: { gte: today }
        };

        if (branchId) {
            where.OR = [{ branchId: branchId as string }, { branchId: null }];
        }

        const promotions = await prisma.promotion.findMany({
            where,
            orderBy: { endDate: 'asc' },
            include: { branch: true }
        });

        res.json({ promotions });
    } catch (error) {
        console.error('Get promotions error:', error);
        res.status(500).json({ error: 'Error al obtener promociones' });
    }
});

// GET /api/promotions/all - List all promotions (admin)
router.get('/all', async (req: Request, res: Response) => {
    try {
        const promotions = await prisma.promotion.findMany({
            orderBy: { createdAt: 'desc' },
            include: { branch: true }
        });

        res.json({ promotions });
    } catch (error) {
        console.error('Get all promotions error:', error);
        res.status(500).json({ error: 'Error al obtener promociones' });
    }
});

// POST /api/promotions - Create promotion (admin)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { branchId, title, description, discountPercent, imageUrl, startDate, endDate } = req.body;

        if (!title || !startDate || !endDate) {
            return res.status(400).json({ error: 'Título, fecha inicio y fecha fin son requeridos' });
        }

        const promotion = await prisma.promotion.create({
            data: {
                branchId: branchId || null,
                title,
                description,
                discountPercent,
                imageUrl,
                startDate: new Date(startDate),
                endDate: new Date(endDate)
            }
        });

        res.status(201).json({ promotion });
    } catch (error) {
        console.error('Create promotion error:', error);
        res.status(500).json({ error: 'Error al crear promoción' });
    }
});

// PUT /api/promotions/:id - Update promotion (admin)
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, discountPercent, imageUrl, startDate, endDate, isActive } = req.body;

        const promotion = await prisma.promotion.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(description !== undefined && { description }),
                ...(discountPercent !== undefined && { discountPercent }),
                ...(imageUrl !== undefined && { imageUrl }),
                ...(startDate && { startDate: new Date(startDate) }),
                ...(endDate && { endDate: new Date(endDate) }),
                ...(isActive !== undefined && { isActive })
            }
        });

        res.json({ promotion });
    } catch (error) {
        console.error('Update promotion error:', error);
        res.status(500).json({ error: 'Error al actualizar promoción' });
    }
});

// DELETE /api/promotions/:id - Delete promotion (admin)
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.promotion.delete({ where: { id } });

        res.json({ success: true });
    } catch (error) {
        console.error('Delete promotion error:', error);
        res.status(500).json({ error: 'Error al eliminar promoción' });
    }
});

export default router;
