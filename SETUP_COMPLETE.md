# 🚀 Resumen de Configuración para GitHub Pages

## ✅ Cambios realizados

### 1. **vite.config.js** - Configurada ruta base
```javascript
base: process.env.NODE_ENV === 'production' ? '/spa202503-main/' : '/',
```

### 2. **package.json** - Agregados:
- Propiedad `homepage` 
- Script `deploy` para gh-pages
- Dependencia `gh-pages`

### 3. **index.html** - Mejorado:
- Título temático: "Pokédex 2025 - ¡A capturar se dijo!"
- Lenguaje: Español
- Metadatos SEO
- Theme color

### 4. **README.md** - Documentación completa
- Instrucciones detalladas
- Stack tecnológico
- Estructura del proyecto

## 📋 Pasos finales para desplegar

### Opción 1: Usando PowerShell (Recomendado)
```powershell
# Ejecuta desde la terminal en VS Code
.\deploy.ps1
```

### Opción 2: Manual
```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Initial commit: Pokédex 2025"

# 2. Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/spa202503-main.git
git branch -M main
git push -u origin main

# 3. Instalar gh-pages
npm install gh-pages --save-dev

# 4. Desplegar
npm run deploy
```

## 🔑 Puntos importantes

1. **Nombre del repositorio**: Debe ser exactamente `spa202503-main`
2. **Usuario de GitHub**: Reemplaza `TU_USUARIO` con tu nombre real
3. **Rama gh-pages**: Se crea automáticamente al hacer deploy
4. **Configuración en GitHub**: Ir a Settings → Pages y seleccionar rama `gh-pages`

## 📍 URL Final
```
https://TU_USUARIO.github.io/spa202503-main
```

## 🔄 Flujo de trabajo actualización

Después de hacer cambios locales:

```bash
git add .
git commit -m "Descripción de cambios"
git push
npm run deploy
```

## 📊 Verificación

Para verificar que todo esté correctamente configurado:

```bash
# Ver configuración de Git
git remote -v

# Verificar la URL base en el build
cat dist/index.html
```

## 🆘 Troubleshooting

| Problema | Solución |
|----------|----------|
| `port already in use` | Ejecuta un terminal nuevo |
| `permission denied` en PowerShell | `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` |
| Sitio 404 | Verifica que la rama `gh-pages` esté en GitHub Pages settings |
| Estilos no cargan | Revisa que la ruta base sea correcta en vite.config.js |

---

**¡Tu Pokédex está lista para ser publicada! 🎉**
