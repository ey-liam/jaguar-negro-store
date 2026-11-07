# Guía de Administración y Actualización — Jaguar Negro MX

Esta guía te explica de forma rápida y sencilla cómo actualizar precios, cambiar o agregar prendas, nuevos diseños para el personalizador, métodos de pago, envíos y opciones en tu tienda.

---

## 1. El correo de Git y Autor

> **¿El correo se puede cambiar después?**  
> **Sí, en cualquier momento.** No afecta en nada a tu tienda ni a tus archivos.

Para cambiarlo cuando quieras:
- **Desde la terminal / PowerShell:**
  ```powershell
  cd "C:\Users\liamc\.gemini\antigravity\scratch\jaguar-negro"
  git config user.email "tu_nuevo_correo@ejemplo.com"
  ```
- **O directamente en `PUBLICAR_GITHUB.bat`:**  
  Abre `PUBLICAR_GITHUB.bat` con Bloc de notas y cambia la línea:
  ```bat
  git config user.email "tu_nuevo_correo@ejemplo.com"
  ```

---

## 2. Actualizar Precios o Modificar Merch Existente

Todo el catálogo vive en un solo lugar: **`app.js`**, en la lista `CATALOG`:

Ruta: `app.js` (a partir de la línea 25)

```javascript
{
  id: "always-ready-hoodie",
  name: "Hoodie Heavyweight \"ALWAYS Ready\"",
  subtitle: "Algodón pesado afelpado · Cita Baden-Powell & firma en espalda",
  category: "Hoodies",              // "Hoodies", "Playeras", "Accesorios", "Personalizados"
  tags: ["Drops 2026", "Bestseller"],
  price: 540,                       // <-- AQUÍ CAMBIAS EL PRECIO DIRECTO
  isDrop2026: true,                 // true = sale en la pestaña "Drops 2026"
  badge: "BESTSELLER · 2026",
  badgeType: "drop",
  sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  defaultSize: "M",
  description: "Descripción detallada que sale en la ventana emergente...",
  variants: [
    {
      id: "obsidiana-rojo",
      label: "Negro Obsidiana / Rojo",
      swatch: "#111115",            // Color del circulito selector
      primaryImg: "assets/products/always-ready-duo.webp",      // Foto principal
      hoverImg: "assets/editorial/editorial-always-ready.webp", // Foto al pasar el cursor
      gallery: [ ... ]             // Fotos que se muestran en el visor
    }
  ]
}
```

### Precios variables por talla (ejemplo Llaveros o Parches):
Si una prenda cambia de precio según la opción (ej. 1 pieza vs paquete):
```javascript
sizePrices: {
  "1 Pieza": 65,
  "Pack x3 ($165)": 165,
  "Lote +15 (Cotizar)": 0
}
```

---

## 3. Cómo Añadir una Nueva Prenda o Diseño al Catálogo

1. Guarda tus fotos en la carpeta:
   `assets/products/tu-foto.webp` (o `.png` / `.jpg`)
2. Abre `app.js` y al final de la lista `CATALOG = [ ... ]` agrega tu nuevo producto copiando esta plantilla:
   ```javascript
   {
     id: "nombre-clave-unico",
     name: "Mi Nueva Playera Scout",
     subtitle: "Subtítulo descriptivo en una línea",
     category: "Playeras", // "Hoodies", "Playeras", "Accesorios" o "Personalizados"
     tags: ["Drops 2026"],
     price: 280,
     featuredRank: 13,
     isDrop2026: true,
     badge: "NUEVO DROP",
     badgeType: "drop",
     sizes: ["XS", "S", "M", "L", "XL", "2XL"],
     defaultSize: "M",
     description: "Explicación completa de tela, corte y estampado.",
     variants: [
       {
         id: "color-negro",
         label: "Negro Obsidiana",
         swatch: "#09090b",
         primaryImg: "assets/products/tu-foto.webp",
         hoverImg: "assets/products/tu-foto-espalda.webp",
         gallery: [
           "assets/products/tu-foto.webp",
           "assets/products/tu-foto-espalda.webp"
         ]
       }
     ]
   },
   ```
3. **¡Listo!** El sistema recalcula en automático los contadores de las pestañas (`Todo (13)`, `Playeras (6)`, etc.), el buscador y los filtros sin que tengas que programar nada más.

---

## 4. Cómo Añadir Siluetas o Gráficos en JN Custom Lab

En `app.js`:

- **Para agregar o cambiar prendas base** (como sudaderas o playeras base):  
  Edita la lista `CUSTOM_GARMENTS` (alrededor de la línea 350):
  ```javascript
  {
    id: "mi-nueva-base",
    name: "Hoodie Rosa Pastel",
    shortLabel: "HOODIE ROSA",
    price: 580,
    isDark: false, // false si es tela clara (letras negras), true si es oscura (letras blancas)
    img: "assets/custom/mi-base.webp"
  }
  ```

- **Para agregar o cambiar gráficos estampables:**  
  Edita la lista `CUSTOM_GRAPHICS` (alrededor de la línea 385):
  ```javascript
  {
    id: "mi-nuevo-logo",
    name: "Emblema Rover",
    imgDark: "assets/graphics/mi-grafico-blanco.webp",  // Cuando la prenda es oscura
    imgLight: "assets/graphics/mi-grafico-negro.webp", // Cuando la prenda es clara
    thumb: "assets/graphics/mi-grafico.webp"
  }
  ```

---

## 5. Modificar Métodos de Pago, Cuentas y Envíos

### A. Datos de Redes y WhatsApp en `app.js`:
Al principio de `app.js` tienes el objeto `STORE_CONFIG`:
```javascript
const STORE_CONFIG = {
  brandName: "JAGUAR NEGRO MX",
  instagramHandle: "@jaguarnegro.mx",
  instagramUrl: "https://www.instagram.com/jaguarnegro.mx/",
  instagramDmUrl: "https://ig.me/m/jaguarnegro.mx",
  whatsappPhone: "5215500000000", // <-- Pon aquí tu número si quieres activar WhatsApp
  storageKey: "jn_flagship_bag_v1"
};
```

### B. En el HTML (`index.html`):
1. **Tarjetas informativas de pago y envíos:**  
   Busca `<section id="logistica">` en `index.html`. Ahí puedes editar los textos descriptivos de SPEI, bancos (BBVA, Nu, Mercado Pago), costo de paqueterías o puntos de entrega.
2. **Opciones desplegables en el formulario de pedido:**  
   Busca los `<select>` en la sección `#encargo` de `index.html`:
   - `<select id="buyerDelivery">` para agregar nuevas zonas o paqueterías (ej. Correos de México, Estafeta, DHL, Foros).
   - `<select id="buyerPayment">` para agregar nuevas opciones de pago (ej. Transferencia, Mercado Pago, OXXO, Efectivo).

El generador de tickets en `app.js` lee automáticamente lo que el cliente elija en esos campos y lo anexa al ticket foliado.

---

## 6. Publicar o Actualizar Cambios en GitHub Pages en 1 Clic

Cada vez que hagas un cambio de precio o agregues fotos:
1. Haz doble clic al archivo:  
   **`PUBLICAR_GITHUB.bat`**
2. El script detectará los cambios, creará el commit y los subirá a tu repositorio:  
   `https://github.com/ey-liam/jaguar-negro-store`  
3. En un par de minutos tu tienda en vivo se actualizará automáticamente en:  
   `https://ey-liam.github.io/jaguar-negro-store/`
