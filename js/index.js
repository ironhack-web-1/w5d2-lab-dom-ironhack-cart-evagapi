// ITERATION 1

//Calculates subtotal price of every product
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

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

function createProduct() {
  //... your code goes here
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
});
