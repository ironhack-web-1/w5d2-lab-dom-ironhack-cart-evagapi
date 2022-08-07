// ITERATION 1

//Calculates subtotal price of every product
function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);
  const subtotalElement = product.querySelector('.subtotal span');

  let subtotal = quantityValue * priceValue;
  subtotalElement.innerHTML = `${subtotal}`;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('tr.product');
  const totalElement = document.querySelector('#total-value span');
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    total += updateSubtotal(product);
  }
  // ITERATION 3
  //... your code goes here
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //... your code goes here
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function getProductName() {
  const nameInput = document.getElementById('create-product-name');
  return nameInput.value;
}

function getProductPrice() {
  const priceInput = document.getElementById('create-product-price');
  return parseFloat(priceInput.value);
}

function addNewProductToCart(name, price) {
  const cartBody = document.querySelector('#cart tbody');
  const productRow = document.createElement('tr');
  productRow.classList.add('product');
  productRow.innerHTML += `
<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
`;
  const removeButton = productRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  cartBody.appendChild(productRow);
}

function createProduct() {
  //... your code goes here
  const nameInput = document.getElementById('create-product-name');
  const productName = nameInput.value;

  const priceInput = document.getElementById('create-product-price');
  const productPrice = parseFloat(priceInput.value);

  addNewProductToCart(productName, productPrice);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const cart = document.querySelector('#cart');
  const removeButtons = cart.querySelectorAll('.btn-remove');
  for (let index = 0; index < removeButtons.length; index++) {
    const removeButton = removeButtons[index];
    removeButton.addEventListener('click', removeProduct);
  }

  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);
});
