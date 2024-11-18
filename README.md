# 🎸 E-commerce de Instrumentos Musicales

Una aplicación web desarrollada con **React** que simula un e-commerce para un local de venta de instrumentos musicales. Los usuarios pueden explorar productos, navegar entre categorías, gestionar su carrito de compras y realizar solicitudes de compra.

---

## 🚀 Funcionalidades

- **Navegación entre categorías:** Filtra productos según su tipo (guitarras, bajos, amplificadores, etc.).
- **Visualización de productos:** Muestra información detallada como nombre, precio, descripción y categoría.
- **Gestión de carrito:** 
  - Agregar productos al carrito.
  - Eliminar productos específicos del carrito.
  - Vaciar completamente el carrito.
- **Solicitud de compra:** Realiza una compra simulada con un identificador único.

---

## 🛠️ Dependencias principales

Esta aplicación utiliza las siguientes librerías y herramientas:

- **Frontend:**
  - [`react`](https://reactjs.org/docs/getting-started.html) (^18.3.1): Biblioteca para construir interfaces de usuario.
  - [`react-router-dom`](https://reactrouter.com/en/main) (^6.28.0): Enrutamiento dinámico para aplicaciones React.
  - [`react-bootstrap`](https://react-bootstrap.github.io/) (^2.10.5): Componentes predefinidos para crear interfaces con Bootstrap.
  - [`bootstrap`](https://getbootstrap.com/docs/5.3/getting-started/introduction/) (^5.3.3): Framework CSS para diseño responsivo.
  - [`react-icons`](https://react-icons.github.io/react-icons/) (^5.3.0): Íconos listos para usar en React.
  - [`@fortawesome/react-fontawesome`](https://fontawesome.com/docs/web/use-with/react/) (^0.2.2): Íconos de FontAwesome para React.
  - [`react-spinners`](https://www.davidhu.io/react-spinners/) (^0.14.1): Spinners de carga para mejorar la experiencia de usuario.
  - [`sweetalert2`](https://sweetalert2.github.io/) (^11.14.5): Notificaciones interactivas y personalizables.

- **Backend y Base de Datos:**
  - [`firebase`](https://firebase.google.com/docs) (^11.0.2): Plataforma para backend en tiempo real y hosting.

---

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/fgarciafigueira/Music-Shop--React`



## Estructura
src/
├── components/
│   ├
│   ├── CartWidget.jsx
│   ├── CartItem.jsx
│   ├── CartList.jsx
│   ├── Item.jsx
│   ├── ItemDetail.jsx
│   └── ItemList.jsx
│   ├── Navbar.jsx
│   ├── Loader.jsx
│   └── Loader.jsx
├── context/
│   ├── CartContext.jsx
├── firebase/
│   ├── db.js
│   └── config.js
│
├── App.js
└── index.js
   
