# 📱 Guía para Desplegar en GitHub Pages

## Paso 1: Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com/new)
2. Crea un nuevo repositorio llamado `spa202503-main`
3. **NO** inicialices con README (copia el código después)

## Paso 2: Inicializar Git en tu proyecto

```bash
cd "c:\Users\carlo\OneDrive\Documents\portalas web II\spa202503-main"
git init
git add .
git commit -m "Initial commit: Pokédex con diseño temático"
```

## Paso 3: Conectar con tu repositorio de GitHub

```bash
git remote add origin https://github.com/TU_USUARIO/spa202503-main.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub**

## Paso 4: Instalar gh-pages

```bash
npm install gh-pages --save-dev
```

## Paso 5: Actualizar package.json (YA HECHO ✅)

Ya hemos actualizado el `package.json` con:
- La propiedad `homepage`
- El script `deploy`

## Paso 6: Desplegar a GitHub Pages

```bash
npm run deploy
```

Este comando hará:
1. Compilar el proyecto (`npm run build`)
2. Publicar en la rama `gh-pages`

## Paso 7: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Entra en **Settings** → **Pages**
3. En **Source**, selecciona `gh-pages` como rama
4. Espera a que se desplegue (puede tomar 1-2 minutos)

## Paso 8: Acceder a tu sitio

Tu Pokédex estará disponible en:
```
https://TU_USUARIO.github.io/spa202503-main
```

## 📝 Notas Importantes

- ✅ El `vite.config.js` ya está configurado con la ruta base correcta
- ✅ El `package.json` tiene los scripts necesarios
- ✅ El `index.html` tiene metadatos SEO mejorados

## 🆘 Si algo falla

Si tienes problemas:

1. Verifica que Git esté instalado:
   ```bash
   git --version
   ```

2. Comprueba tu conexión a GitHub:
   ```bash
   git remote -v
   ```

3. Revisa los errores en la pestaña **Actions** de tu repositorio

## 🔄 Actualizar el sitio después de cambios

Después de hacer cambios locales:

```bash
git add .
git commit -m "Descripción de cambios"
git push
npm run deploy
```

¡Listo! Tu Pokédex estará publicada en GitHub Pages 🚀
