import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma.js';

const router = Router();

// GET /api/gallery - List gallery items (public)
router.get('/', async (req: Request, res: Response) => {
    try {
        const { branchId, category, limit = '24' } = req.query;

        const where: Record<string, unknown> = { isActive: true };
        if (branchId) {
            where.OR = [{ branchId: branchId as string }, { branchId: null }];
        }
        if (category) where.category = category;

        const items = await prisma.galleryItem.findMany({
            where,
            orderBy: { sortOrder: 'asc' },
            take: parseInt(limit as string),
            include: { branch: true }
        });

        res.json({ items });
    } catch (error) {
        console.error('Get gallery error:', error);
        res.status(500).json({ error: 'Error al obtener galería' });
    }
});

// POST /api/gallery - Add gallery item (admin)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { branchId, mediaUrl, mediaType, category, caption, sortOrder } = req.body;

        if (!mediaUrl) {
            return res.status(400).json({ error: 'URL del medio es requerida' });
        }

        const item = await prisma.galleryItem.create({
            data: {
                branchId: branchId || null,
                mediaUrl,
                mediaType: mediaType || 'image',
                category,
                caption,
                sortOrder: sortOrder || 0
            }
        });

        res.status(201).json({ item });
    } catch (error) {
        console.error('Create gallery item error:', error);
        res.status(500).json({ error: 'Error al agregar a galería' });
    }
});

// DELETE /api/gallery/:id - Delete gallery item (admin)
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.galleryItem.delete({ where: { id } });

        res.json({ success: true });
    } catch (error) {
        console.error('Delete gallery item error:', error);
        res.status(500).json({ error: 'Error al eliminar de galería' });
    }
});

export default router;
