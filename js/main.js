// Sample products
const products = [
  {
    name: "Pikachu",
    type: "Electric",
    rarity: "Common",
    price: 10,
    image: "../img/pikachu.jpg"
  },
  {
    name: "Charizard",
    type: "Fire",
    rarity: "Rare",
    price: 50,
    image: "../img/charizard.jpg"
  },
  {
    name: "Blastoise",
    type: "Water",
    rarity: "Rare",
    price: 45,
    image: "../img/blastoise.png"
  },
  {
    name: "Venusaur",
    type: "Grass",
    rarity: "Rare",
    price: 42,
    image: "../img/venusaur.png"
  },
  {
    name: "Mewtwo",
    type: "Psychic",
    rarity: "Legendary",
    price: 100,
    image: "../img/mewtwo.png"
  },
  {
    name: "Snorlax",
    type: "Normal",
    rarity: "Uncommon",
    price: 20,
    image: "../img/snorlax.png"
  },
  {
    name: "Gengar",
    type: "Ghost",
    rarity: "Rare",
    price: 35,
    image: "../img/gengar.png"
  },
  {
    name: "Lucario",
    type: "Fighting/Steel",
    rarity: "Rare",
    price: 40,
    image: "../img/lucario.png"
  },
  {
    name: "Jigglypuff",
    type: "Fairy",
    rarity: "Common",
    price: 12,
    image: "../img/jigglypuff.png"
  },
  {
    name: "Dragonite",
    type: "Dragon",
    rarity: "Ultra Rare",
    price: 80,
    image: "../img/dragonite.png"
  }
  
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(data) {
  productList.innerHTML = "";
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Type: ${product.type}</p>
      <p>Rarity: ${product.rarity}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productName) {
  alert(`${productName} added to cart!`);
  // TODO: integrate with cart.js
}

// Search
searchInput?.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) || p.type.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

// Initial render
if (productList) {
  renderProducts(products);
}
function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
