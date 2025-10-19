# 🍔 Jimmy's Diner - Mobile Restaurant Ordering App

A sleek, mobile-first restaurant ordering application built with vanilla JavaScript. This project features a dynamic menu system, real-time order tracking, and an intuitive payment flow.

![Jimmy's Diner Preview](https://img.shields.io/badge/Status-Active-success) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)

## 🎯 Project Overview

Jimmy's Diner is a single-page application (SPA) that simulates a complete restaurant ordering experience. Users can browse menu items, add them to their cart, review their order, and complete a mock payment process.

**Live Demo:** [View Live Project](#) _(Add your deployed link here)_

## ✨ Features

- **📱 Mobile-First Design** - Fully responsive interface optimized for mobile devices
- **🎨 Pixel-Perfect UI** - Implemented from Figma design specifications
- **🛒 Dynamic Shopping Cart** - Real-time order updates with add/remove functionality
- **💰 Live Price Calculation** - Automatic total price updates
- **💳 Payment Modal** - Interactive form with validation
- **🎭 Smooth UX** - Intuitive user flow from menu to checkout
- **♿ Accessible** - Semantic HTML and ARIA labels for screen readers

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom properties, Flexbox, responsive design
- **JavaScript (ES6+)** - Modern syntax with modules, arrow functions, destructuring
- **Git** - Version control

## 📂 Project Structure

```
Mobile-Ordering-App/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── index.js            # Core application logic
├── data.js             # Menu data (exported module)
├── header-img.jpg      # Hero section image
└── README.md           # Project documentation
```

## 🛠️ Key Functionality

### Menu Rendering

- Dynamic menu generation from data array
- ES6 destructuring and template literals
- Efficient DOM manipulation

### Order Management

- Event delegation for scalable click handling
- State management with JavaScript arrays
- Real-time cart updates

### Payment Flow

- Modal system with form validation
- Form submission handling with `preventDefault()`
- Success state management

## 💻 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/jimmys-diner-app.git
   ```

2. **Navigate to project directory**

   ```bash
   cd jimmys-diner-app
   ```

3. **Open with Live Server**

   - Use VS Code Live Server extension, or
   - Open `index.html` in your browser

   > **Note:** This project uses ES6 modules, so a local server is required (file:// protocol won't work)

## 🎨 Design Specifications

- **Max Width:** 600px (mobile frame)
- **Color Palette:**
  - Primary Green: `#16DB99`
  - Text: `#000000`
  - Muted Gray: `#8B8B8B`
  - Border: `#D2D2D2`
- **Typography:**
  - Smythe (Hero, Menu titles)
  - Verdana (Body text, prices)

## 📸 Screenshots

### Menu View

![Menu View](./screenshots/menu-view.png)
_Browse available items with detailed descriptions_

### Order Summary

![Order Summary](./screenshots/order-summary.png)
_Review your selections before checkout_

### Payment Modal

![Payment Modal](./screenshots/payment-modal.png)
_Secure payment form interface_

### Success State

![Success Message](./screenshots/success-state.png)
_Order confirmation message_

## 🔑 Code Highlights

### Event Delegation Pattern

```javascript
menuList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-plus")) {
    const menuId = Number(e.target.dataset.id);
    // Add to cart logic
  }
});
```

### Dynamic Total Calculation

```javascript
const total = orders.reduce((sum, item) => sum + item.price, 0);
```

### Data-Driven Rendering

```javascript
orders.forEach((order) => {
  orderHTML += `<li class="list__row">...</li>`;
});
orderList.innerHTML = orderHTML;
```

## 🎓 Learning Outcomes

- Mastered ES6+ features (modules, destructuring, arrow functions)
- Implemented event delegation for performance optimization
- Built responsive layouts with modern CSS
- Practiced state management in vanilla JavaScript
- Developed pixel-perfect UI from design mockups

## 🚧 Future Enhancements

- [ ] Add quantity selectors for menu items
- [ ] Implement local storage for cart persistence
- [ ] Add item filtering/search functionality
- [ ] Include animations and transitions
- [ ] Add unit tests with Jest
- [ ] Integrate with a real payment API (Stripe)
- [ ] Add order history feature

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## � Author

**Illona Addae**

- GitHub: [@illonaaddae](https://github.com/illonaaddae)
- LinkedIn: [Illona Addae](https://www.linkedin.com/in/illonaaddae)
- Portfolio: [oceaniccoder.dev](https://oceaniccodes.netlify.app/)

## 🙏 Acknowledgments

- Design inspiration from [Scrimba](https://scrimba.com)
- Hero image from [Unsplash](https://unsplash.com)
- Icons and emojis for menu items

---

⭐ **Star this repository if you found it helpful!**

_Built with ❤️ and JavaScript by Oceaniccoder_
