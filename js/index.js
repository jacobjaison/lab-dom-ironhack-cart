// ITERATION 1

function updateSubtotal(product) {
  let qtyVal,priceVal,prodVal;
  console.log('Calculating subtotal, yey!');
  
    const price = product.querySelector('.price span');
    const qty = product.querySelector('.quantity input');
    //... your code goes here
    priceVal = parseFloat(price.innerHTML);
    qtyVal = qty.value;
    prodVal = priceVal * qtyVal;
    const subTtl = product.querySelector('.subtotal span');
    subTtl.innerHTML = `${prodVal}`;
    
  

  return prodVal;
}

function calculateAll() {
  let varsubTotal, varTotal;
  varTotal = 0;
  const multipleProducts = document.getElementsByClassName('product');
  for(let i=0;i<multipleProducts.length;i++){
    varsubTotal = updateSubtotal(multipleProducts[i]);
    varTotal = varTotal + varsubTotal;
  } 
  const totVal = document.querySelector('#total-value span');
  totVal.innerHTML = `${varTotal}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  //... your code goes here
  //event.target.parentNode.removeChild(event.target)
  target.parentNode.remove();


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


  const removeProductBtn = document.querySelectorAll('.action');
  const buttons = [...removeProductBtn];
  buttons.forEach(but => {
    but.addEventListener('click',(event) => {
      removeProduct(event)});

  });
  
