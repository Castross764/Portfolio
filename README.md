# Portfolio de Alejandro Castro Bueno

Portfolio personal profesional diseñado con estilo minimalista inspirado en Apple.

## 📁 Estructura de Archivos

```
portfolio/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
│
├── images/             # Carpeta de imágenes
│   └── profile.jpg     # Tu foto de perfil
│
└── README.md           # Este archivo
```

## 🖼️ Configuración de Imágenes

### 1. Crear la carpeta de imágenes

Crea una carpeta llamada `images` en el mismo directorio donde están tus archivos HTML, CSS y JS.

### 2. Agregar tu foto de perfil

- Coloca tu foto de perfil en la carpeta `images/` con el nombre `profile.jpg`
- Tamaño recomendado: 280x280 píxeles o superior (será redimensionada automáticamente)
- Formatos soportados: JPG, PNG, WebP

**Alternativa:** Si prefieres usar un nombre diferente para tu imagen, cambia esta línea en `index.html`:

```html
<img src="images/profile.jpg" alt="Alejandro Castro" class="profile-img">
```

Por ejemplo, si tu imagen se llama `mi-foto.png`:

```html
<img src="images/mi-foto.png" alt="Alejandro Castro" class="profile-img">
```

### 3. Usar tu foto actual de internet (temporal)

Tu foto actual está alojada en: `https://i.ibb.co/9HzWCjg/photo-2025-01-06-23-59-55.jpg`

Si quieres mantener esta URL temporalmente, la foto ya está configurada en el código.

**Importante:** Es recomendable descargar la imagen y alojarla localmente para evitar problemas de carga.

## 🚀 Cómo usar el portfolio

### Opción 1: Abrir directamente en el navegador

1. Guarda los tres archivos (`index.html`, `styles.css`, `script.js`) en la misma carpeta
2. Crea la carpeta `images` y agrega tu foto
3. Haz doble clic en `index.html` para abrir en tu navegador

### Opción 2: Servidor local (recomendado para desarrollo)

Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

O usa extensiones como "Live Server" en VS Code.

## ✏️ Personalización

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --bg-dark: #000000;
    --bg-light: #ffffff;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --accent: #0071e3;        /* Color principal */
    --accent-hover: #0077ed;  /* Color al pasar el mouse */
}
```

### Modificar contenido

Toda la información personal está en `index.html`. Busca las secciones:

- **Hero**: Título y subtítulo principal
- **About**: Información sobre ti
- **Projects**: Tus proyectos
- **Hobbies**: Tus intereses
- **Contact**: Tu información de contacto

### Agregar más proyectos

Copia este bloque dentro de `<div class="projects-grid">`:

```html
<div class="project-item">
    <div class="project-image">🎯 Ícono</div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto...</p>
        <p><strong>Mi Rol:</strong> Tu rol en el proyecto</p>
        <div class="tech-stack">
            <span class="tech-badge">Tecnología 1</span>
            <span class="tech-badge">Tecnología 2</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank" class="project-link primary">Ver Demo →</a>
            <a href="#" target="_blank" class="project-link secondary">GitHub</a>
        </div>
    </div>
</div>
```

## 📱 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y profesionales
- ✅ Navegación fixed con efecto blur
- ✅ Smooth scrolling
- ✅ Efectos hover interactivos
- ✅ Optimizado para rendimiento

## 🌐 Publicar en línea

### GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y guarda
5. Tu sitio estará en: `https://tuusuario.github.io/nombre-repo`

### Netlify (Gratis)

1. Arrastra tu carpeta completa a [netlify.com/drop](https://app.netlify.com/drop)
2. Obtendrás una URL instantánea

### Vercel (Gratis)

1. Instala Vercel CLI: `npm i -g vercel`
2. En tu carpeta: `vercel`
3. Sigue las instrucciones

## 🔧 Solución de problemas

**Las imágenes no se ven:**
- Verifica que la carpeta `images` esté en el mismo nivel que `index.html`
- Verifica que el nombre del archivo sea exacto (incluyendo mayúsculas/minúsculas)
- Revisa la consola del navegador (F12) para errores

**Los estilos no se aplican:**
- Asegúrate de que `styles.css` esté en la misma carpeta que `index.html`
- Verifica que el navegador no tenga caché (Ctrl + F5 para recargar)

**JavaScript no funciona:**
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola del navegador (F12) para ver errores

## 📞 Contacto

Si tienes preguntas sobre el portfolio, puedes contactarme:

- **Email:** alecbu20@gmail.com
- **LinkedIn:** [Alejandro Castro Bueno](https://www.linkedin.com/in/alejandro-castro-bueno-09b730275)
- **GitHub:** [Castross764](https://github.com/Castross764)

## 📄 Licencia

Este portfolio es de uso personal. Siéntete libre de usarlo como inspiración para tu propio portfolio.

---

**Hecho con 💙 por Alejandro Castro Bueno**# Portfolio
