import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma.js';

const router = Router();

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email y contraseña son requeridos' });
        }

        const admin = await prisma.admin.findUnique({
            where: { email: email.toLowerCase() }
        });

        if (!admin) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const validPassword = await bcrypt.compare(password, admin.passwordHash);
        if (!validPassword) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { id: admin.id, email: admin.email, role: admin.role },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
        );

        res.json({
            token,
            admin: {
                id: admin.id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// POST /api/auth/register (only for initial setup)
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Check if any admin exists
        const adminCount = await prisma.admin.count();
        if (adminCount > 0) {
            return res.status(403).json({ error: 'Registro no permitido. Ya existe un administrador.' });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const admin = await prisma.admin.create({
            data: {
                email: email.toLowerCase(),
                passwordHash,
                name,
                role: 'owner'
            }
        });

        const token = jwt.sign(
            { id: admin.id, email: admin.email, role: admin.role },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
        );

        res.status(201).json({
            token,
            admin: {
                id: admin.id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// GET /api/auth/me
router.get('/me', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Token no proporcionado' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as {
            id: string;
            email: string;
            role: string;
        };

        const admin = await prisma.admin.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true, name: true, role: true }
        });

        if (!admin) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        res.json({ admin });
    } catch (error) {
        console.error('Auth check error:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
});

export default router;
