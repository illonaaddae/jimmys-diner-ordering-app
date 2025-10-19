import { menuArray } from "./data.js";

const menuSection = document.getElementById("menuSection");

const menuList = document.getElementById("menuList");
const checkoutSection = document.getElementById("checkoutSection");
const orderList = document.getElementById("orderList");
const totalRow = document.getElementById("totalRow");
const successSection = document.getElementById("successSection");
const paymentModal = document.getElementById("paymentModal");
const paymentForm = document.getElementById("paymentForm");

const completeBtn = document.getElementById("completeBtn");

//  {
//     name: "Pizza",
//     ingredients: ["pepperoni", "mushrom", "mozarella"],
//     id: 0,
//     price: 14,
//     emoji: "🍕",
//   },

// Render Menu List
function defaultMenu(arr) {
  arr.forEach((menu) => {
    const { name, ingredients, id, price, emoji } = menu;
    menuList.innerHTML += `
      <li class="list__row">
            <div class="row-left">
              <div class="row-img">${emoji}</div>
              <div class="row-main">
                <h3 class="row-title">${name}</h3>
                <p class="row-desc">${ingredients.join(", ")}</p>
                <span class="row-price">$${price}</span>
              </div>
            </div>
            <button type="button" class="btn-plus" data-id=${id}>+</button>
          </li>
    `;
  });
}
defaultMenu(menuArray);

let orders = [];
// Order list
function order() {
  menuList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-plus")) {
      const menuId = Number(e.target.dataset.id);
      const orderItem = menuArray.find((item) => item.id === menuId);

      orders.push(orderItem);
      renderOrder();
    }
  });
}

// Render the order list
function renderOrder() {
  let orderHTML = "";
  let total = 0;

  if (orders.length > 0) {
    orders.forEach((order) => {
      const { name, price, id } = order;

      orderHTML += `
           <li class="list__row">
             <div class="row-left">
            <span class="row-title">${name}</span>
             <button class="remove" data-id="${id}">remove</button>
             </div>
           <span class="row-price">$${price}</span>
          </li>
          `;
      total += price;
    });
  }

  // Updating the DOM once with all the order
  orderList.innerHTML = orderHTML;

  // Update the total price
  document.querySelector(".total__value").textContent = `$${total}`;

  // Show Checkout section and button
  checkoutSection.classList.remove("u-hidden");
  completeBtn.classList.remove("u-hidden");
}
order();

function completeOrder() {
  completeBtn.addEventListener("click", () => {
    paymentModal.classList.remove("u-hidden");
  });

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Pay button clicked");
  });
}

completeOrder();
