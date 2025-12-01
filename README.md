# 🔴 Pokédex 2025 ⚡

Una Pokédex moderna y visualmente atractiva construida con React, Vite y Tailwind CSS. Explora todos los Pokémon con un diseño temático profesional inspirado en el universo Pokémon.

## ✨ Características

- 🎨 **Diseño temático Pokémon** - Paleta de colores oficial (rojo, azul, amarillo)
- 🔍 **Explorador de Pokémon** - Navega por miles de Pokémon
- 📱 **Responsive** - Funciona perfectamente en móvil, tablet y escritorio
- ⚡ **Rápido** - Construido con Vite para máximo rendimiento
- 🎭 **Animaciones suaves** - Efectos hover y transiciones profesionales
- 🌐 **Tarjetas coleccionables** - Las tarjetas se ven como cartas reales de Pokémon

## 🚀 Comenzar

### Requisitos previos

- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/spa202503-main.git
cd spa202503-main

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación se abrirá en `http://localhost:5174`

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview

# Verificar código con ESLint
npm run lint

# Desplegar a GitHub Pages
npm run deploy
```

## 🌍 Desplegar a GitHub Pages

Para desplegar tu Pokédex en GitHub Pages, sigue estos pasos:

### 1. Crear repositorio en GitHub
Crea un repositorio llamado `spa202503-main` en [GitHub](https://github.com/new)

### 2. Conectar con tu repositorio
```bash
git init
git add .
git commit -m "Initial commit: Pokédex 2025"
git remote add origin https://github.com/TU_USUARIO/spa202503-main.git
git branch -M main
git push -u origin main
```

### 3. Instalar gh-pages
```bash
npm install gh-pages --save-dev
```

### 4. Desplegar
```bash
npm run deploy
```

### 5. Configurar GitHub Pages
1. Ve a tu repositorio
2. Settings → Pages
3. Selecciona `gh-pages` como rama
4. ¡Listo! Tu sitio estará en `https://TU_USUARIO.github.io/spa202503-main`

**Ver más detalles en [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)**

## 🛠️ Stack Tecnológico

- **Frontend**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **API**: PokeAPI
- **Deployment**: GitHub Pages

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeroPanel.jsx
│   └── Pokedex/
│       ├── Card.jsx
│       └── PokeList.jsx
├── pages/
│   ├── About.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   └── NotFound.jsx
├── hooks/
│   └── usePokemonService.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Diseño y Colores

- 🔴 **Rojo Pokémon**: #EF3B36
- 🔵 **Azul Pokémon**: #3B5BDB
- 🟡 **Amarillo Pokémon**: #FFCB05
- ⚫ **Negro**: #231F20
- ⚪ **Blanco**: #F5F5F5

## 📚 Componentes Principales

### Header
Navegación superior con logo temático y enlaces a Inicio y Acerca de.

### Hero Panel
Banner de bienvenida con gradiente Pokémon y animaciones.

### Card (Tarjeta Pokémon)
Componente individual que muestra:
- Número de Pokémon
- Imagen
- Nombre
- Efecto hover con escala

### PokeList
Grid responsivo que muestra todas las tarjetas con paginación.

### Footer
Pie de página con créditos y año actual.

## 🔄 Actualizar contenido

Para actualizar tu sitio después de hacer cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
npm run deploy
```

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 🙏 Créditos

- Datos de Pokémon: [PokeAPI](https://pokeapi.co/)
- Imágenes: [Lorem Picsum](https://picsum.photos/)
- Diseño inspirado en el universo oficial de Pokémon

## 📧 Contacto

¿Preguntas o sugerencias? ¡Abre un issue en GitHub!

---

**Hecho con ❤️ usando React y Tailwind CSS**

