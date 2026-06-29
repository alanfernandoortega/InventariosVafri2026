# Cómo instalar tu app de Inventario (Windows y Android)

Estos archivos convierten tu monitor en una **app instalable (PWA)** que funciona
en Windows y Android sin necesidad de tiendas de aplicaciones ni instaladores.

## Archivos incluidos
- `index.html` → Monitor de inventario
- `etiquetas.html` → Generador de etiquetas
- `manifest.json` → Configuración de la app (nombre, ícono, colores)
- `sw.js` → Service Worker (permite que funcione sin internet)
- `icon-192.png` / `icon-512.png` → Íconos de la app

---

## Paso 1: Subir los archivos a GitHub Pages

1. Ve a tu repositorio de GitHub (el mismo que ya usas)
2. Sube estos 6 archivos a la raíz del repositorio, **reemplazando** los
   `index.html` y `etiquetas.html` anteriores
3. Espera 1-2 minutos a que GitHub Pages actualice

**Importante:** Los archivos deben quedar todos en la misma carpeta (raíz del
repo), no en subcarpetas — el `manifest.json` y `sw.js` usan rutas relativas
(`./`) que esperan esa estructura.

---

## Paso 2: Instalar en Windows

1. Abre tu sitio (ej. `https://tunombre.github.io/turepo`) en **Chrome** o **Edge**
2. Verás un ícono ⊕ o "Instalar" en la barra de direcciones (lado derecho)
3. Haz clic en **Instalar**
4. La app se abre en su propia ventana, sin barra de navegador, y queda
   anclada en el menú de inicio / escritorio

Para acceder al generador de etiquetas dentro de la app instalada, abre el
menú (⋮ arriba a la derecha de la ventana) y usa "Atajos de la app" o
navega directamente a la pantalla de etiquetas desde el monitor.

---

## Paso 3: Instalar en Android

1. Abre el mismo sitio en **Chrome** desde el celular
2. Aparecerá un banner "Agregar Inventario a la pantalla de inicio" (o ve
   al menú ⋮ → "Instalar app" / "Agregar a pantalla de inicio")
3. Confirma — aparecerá un ícono como cualquier otra app
4. Al abrirla, corre en pantalla completa, sin la interfaz de Chrome

---

## ¿Funciona sin internet?

Sí. Una vez instalada y abierta por primera vez con internet, el Service
Worker guarda los archivos en caché. Si pierdes conexión, la app sigue
abriendo con los datos del catálogo que tenías cargados en ese momento.

**Nota:** si subes una versión nueva del catálogo a GitHub, necesitas abrir
la app una vez con internet para que se actualice el caché.

---

## ¿Quieres un .exe o .apk real más adelante?

Si en el futuro necesitas un instalador tradicional (.exe) o un paquete
.apk para distribuir fuera del navegador, se puede generar con
herramientas como **Tauri** (Windows) o **Capacitor** (Android) usando
estos mismos archivos HTML como base. Es un paso extra que requiere
compilar en una computadora con las herramientas instaladas — avísame si
llegas a ese punto y te preparo el proyecto.
