
// Load cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function updateQuantity(index, quantity) {
  const cart = getCart();
  cart[index].quantity = parseInt(quantity);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('subtotal');
  const taxEl = document.getElementById('tax');
  const shippingEl = document.getElementById('shipping');
  const totalEl = document.getElementById('total');

  const cart = getCart();
  cartItemsContainer.innerHTML = '';

  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    const itemEl = document.createElement('div');
    itemEl.classList.add('cart-item');
    itemEl.innerHTML = `
      <div>
        <strong>${item.name}</strong> (${item.type}) - $${item.price.toFixed(2)}
      </div>
      <div>
        Quantity: 
        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)" />
        <button onclick="removeItem(${index})">Remove</button>
      </div>
      <p>Item Total: $${itemTotal.toFixed(2)}</p>
      <hr />
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  const tax = subtotal * 0.10;
  const shipping = cart.length > 0 ? 5.00 : 0.00;
  const total = subtotal + tax + shipping;

  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  shippingEl.textContent = shipping.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}

// Run when page loads
renderCart();