# JAGUAR NEGRO (`@jaguarnegro.mx`) — Tienda & Catálogo Oficial

Sitio web estático de comercio directo, catálogo editorial y personalizador interactivo (**JN Custom Lab**) para **Jaguar Negro**, marca mexicana de streetwear, accesorios y cultura Scout.

- **Instagram Oficial:** [@jaguarnegro.mx](https://www.instagram.com/jaguarnegro.mx/)
- **Arquitectura:** 100% estática (`HTML5 + CSS3 + Vanilla JS`), cero dependencias de compilación, optimizada para **GitHub Pages** (`main` + `.nojekyll`).

## Estructura del Proyecto

- `index.html` — Tienda principal, Hero con video de estudio, Catálogo filtrable, JN Custom Lab, Lookbook `@jaguarnegro.mx`, Combos y Checkout directo con generación de folio.
- `styles.css` — Sistema de diseño editorial/estudio, tipografías oficiales `@font-face`, animaciones GPU (`requestAnimationFrame` + `IntersectionObserver` + inclinación 3D).
- `app.js` — Motor del catálogo, selector de variantes/tallas, etiqueta tejida dinámica (`XS`–`2XL`), bolsa persistente (`localStorage`) y generador de tickets para DM/WhatsApp.
- `assets/` — Fotografías de estudio optimizadas en WebP, carteles de campaña, vectores transparentes para personalización, etiquetas de talla, tipografías oficiales y reel en MP4.
- `PUBLICAR_GITHUB.bat` — Script de un clic para crear o actualizar el repositorio en GitHub Pages (`https://ey-liam.github.io/jaguar-negro/`).

## Desarrollo Local

```powershell
python -m http.server 8090
```

Luego abre `http://localhost:8090` en tu navegador.
