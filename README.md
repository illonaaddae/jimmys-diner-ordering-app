# 🍔 Jimmy's Diner - Mobile Restaurant Ordering App

A sleek, mobile-first restaurant ordering application built with vanilla JavaScript. This project features a dynamic menu system, real-time order tracking, and an intuitive payment flow.

![Jimmy's Diner Preview](https://img.shields.io/badge/Status-Active-success) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)

## 🎯 Project Overview

Jimmy's Diner is a single-page application (SPA) that simulates a complete restaurant ordering experience. Users can browse menu items, add them to their cart, review their order, and complete a mock payment process.

**Live Demo:** [View Live Project](#) _(Add your deployed link here)_

## ✨ Features

- **📱 Mobile-First Design** - Fully responsive interface optimized for mobile devices (600px max-width)
- **🎨 Pixel-Perfect UI** - Implemented from Figma design specifications with precise spacing and typography
- **🛒 Dynamic Shopping Cart** - Add items to cart with real-time updates
- **❌ Remove Items** - Remove individual items from cart with event delegation
- **💰 Live Price Calculation** - Automatic total price updates as items are added/removed
- **💳 Payment Modal** - Interactive form with username input and validation
- **👤 Personalized Success Message** - Displays user's name in order confirmation
- **🎭 Smooth State Management** - Auto-hide/show sections based on cart status
- **♿ Accessible** - Semantic HTML and ARIA labels for screen readers
- **📦 ES6 Modules** - Clean code organization with import/export

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

- Dynamic menu generation from data array using `forEach`
- ES6 destructuring and template literals for clean code
- Efficient DOM manipulation with `innerHTML`
- Data attributes (`data-id`) for item identification

### Order Management

- **Add to Cart**: Click `+` button to add items to order
- **Remove from Cart**: Click "remove" to delete individual items
- Event delegation pattern for scalable click handling
- State management with JavaScript arrays (`orders`)
- Conditional rendering based on cart state
- Real-time cart updates with `renderOrder()` function

### Price Calculation

- Dynamic total calculation using array iteration
- Automatic updates when items are added or removed
- Display formatted prices with `$` symbol

### Payment Flow

- Modal system with overlay (backdrop)
- Form with username, card number, and CVV inputs
- Form submission handling with `preventDefault()`
- Username captured from form input
- Success state with personalized greeting

### UI State Management

- Auto-show checkout section when items added
- Auto-hide checkout section when cart is empty
- Toggle payment modal on "Complete order" click
- Display success message after payment
- Hide all sections except success after payment completion

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
// Add to cart
menuList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-plus")) {
    const menuId = Number(e.target.dataset.id);
    const orderItem = menuArray.find((item) => item.id === menuId);
    orders.push(orderItem);
    renderOrder();
  }
});

// Remove from cart
orderList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const itemId = Number(e.target.dataset.id);
    const itemIndex = orders.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) {
      orders.splice(itemIndex, 1);
    }
    renderOrder();
  }
});
```

### Dynamic Total Calculation

```javascript
let total = 0;
orders.forEach((order) => {
  total += order.price;
});
document.querySelector(".total__value").textContent = `$${total}`;
```

### Conditional Rendering & State Management

```javascript
if (orders.length > 0) {
  // Build order HTML
  checkoutSection.classList.remove("u-hidden");
  completeBtn.classList.remove("u-hidden");
} else {
  checkoutSection.classList.add("u-hidden");
  completeBtn.classList.add("u-hidden");
}
```

### Personalized Success Message

```javascript
paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  successText.textContent = `Thanks, ${username}! Your order is on its way!`;
});
```

## 🎓 Learning Outcomes

- Mastered **ES6+ features** (modules, destructuring, arrow functions, template literals)
- Implemented **event delegation** for performance optimization and scalability
- Built **responsive layouts** with modern CSS (Flexbox, custom properties)
- Practiced **state management** in vanilla JavaScript with arrays
- Developed **pixel-perfect UI** from Figma design mockups
- Learned **DOM manipulation** best practices (minimize reflows)
- Implemented **form handling** with validation and preventDefault
- Used **data attributes** for element identification
- Practiced **conditional rendering** based on application state
- Applied **array methods** (forEach, find, findIndex, splice)
- Structured code with **modular functions** for maintainability

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
