# 📦 anis-router

Realizando mi proyecto de titulacion con mi pareja, buscamos la forma de aprender y entender como funciona React Router, fácil de usar y personalizable.

---

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/isma-router.git
   cd isma-router
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```
   o si usas Yarn:
   ```bash
   yarn
   ```

---

## 🛠️ Uso básico

```jsx
import { Router, Route, Link } from 'isma-router';

function App() {
  return (
    <Router>
      <Route path='/' Component={() => <h1>Home</h1>} />
      <Route path='/about' Component={() => <h1>About</h1>} />
    </Router>
  );
}
```

Navega usando el componente `<Link>`:
```jsx
<Link to="/about">Ir a About</Link>
```

---

## 🧪 Pruebas

Este proyecto utiliza [Vitest](https://vitest.dev/) y [@testing-library/react](https://testing-library.com/).

### Ejecutar pruebas

```bash
npm test
```
o
```bash
npx vitest
```

---

## 📄 Estructura del proyecto

- `src/Router.jsx` — Componente principal del router.
- `src/Route.jsx` — Componente para definir rutas.
- `src/Link.jsx` — Componente para navegación.
- `src/Router.test.jsx` — Pruebas unitarias.

---

## 📝 Licencia

De codigo abierto ^^

## 📝 Agradecimientos Especiales

Gracias por las enseñanzas Midudev ^^
[text](https://www.youtube.com/@midulive)

---
