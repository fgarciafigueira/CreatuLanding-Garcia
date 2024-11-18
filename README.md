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
  - `react`: ^18.3.1
  - `react-router-dom`: ^6.28.0
  - `react-bootstrap`: ^2.10.5
  - `bootstrap`: ^5.3.3
  - `react-icons`: ^5.3.0
  - `@fortawesome/react-fontawesome`: ^0.2.2
  - `react-spinners`: ^0.14.1
  - `sweetalert2`: ^11.14.5

- **Backend y Base de Datos:**
  - `firebase`: ^11.0.2

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
   
