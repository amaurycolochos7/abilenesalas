# Abilene Salas - DASH Studio

Sistema de reservas y gestión de citas para estudios de micropigmentación, pestañas y tratamientos láser.

## 🚀 Despliegue en Vercel

### Opción 1: Desde la Interfaz Web de Vercel

1. Ve a [Vercel](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en "Add New..." → "Project"
3. Importa el repositorio de este proyecto
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"

### Opción 2: Desde la Terminal

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desde la raíz del proyecto, ejecutar:
vercel

# Seguir las instrucciones en pantalla
# Para producción:
vercel --prod
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# El proyecto estará disponible en http://localhost:3000
```

## 📦 Build de Producción

```bash
# Crear build optimizado
npm run build

# Ejecutar build de producción localmente
npm start
```

## 📄 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── servicios/
│   │   └── page.tsx          # Catálogo de servicios
│   ├── galeria/
│   │   └── page.tsx          # Galería de trabajos
│   ├── sucursales/
│   │   └── page.tsx          # Listado de sucursales
│   ├── promociones/
│   │   └── page.tsx          # Promociones activas
│   └── reservar/
│       └── page.tsx          # Sistema de reservas
└── public/
    └── images/               # Recursos estáticos
```

## ✨ Características

- ✅ Sistema de reservas paso a paso
- ✅ Catálogo completo de servicios con precios
- ✅ Galería de trabajos realizados
- ✅ Información de sucursales
- ✅ Promociones y ofertas
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Optimizado para SEO
- ✅ Animaciones suaves y premium

## 🎨 Tecnologías

- Next.js 15
- TypeScript  
- Tailwind CSS
- CSS personalizado con sistema de diseño premium

## 📱 Responsividad

El sitio está completamente optimizado para:
- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🔗 Enlaces del Sitio

- `/` - Página principal
- `/servicios` - Catálogo de servicios
- `/galeria` - Galería de trabajos
- `/sucursales` - Ubicaciones
- `/promociones` - Ofertas especiales
- `/reservar` - Sistema de reservas

## 📞 Contacto

- WhatsApp: +52 81 1234 5678
- Instagram: @dash_pmu.lash
- Email: contacto@dashstudio.com

## 📝 Notas para Producción

Antes de desplegar a producción, asegúrate de:

1. Actualizar los números de teléfono reales en:
   - `/sucursales/page.tsx`
   - `/promociones/page.tsx` 
   - `/page.tsx` (footer)

2. Agregar las imágenes reales en `/public/images/`

3. Conectar con el backend para reservas reales (actualmente simulado)

4. Configurar variables de entorno si las necesitas

## 🎯 Demostración

Este proyecto está configurado con información de demostración realista para presentar a la cliente. Todos los servicios, precios y promociones son ejemplos que pueden ajustarse según las necesidades del negocio.
