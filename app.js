//functions
function updateProductCounter(productId, isIncreasing, price, fieldId) {
  let productCounter = document.getElementById(productId);
  if (isIncreasing) {
    const productCounterValue = parseInt(productCounter.value) + 1;
    productCounter.value = productCounterValue;
  } else if (productCounter.value > 0) {
    const productCounterValue = parseInt(productCounter.value) - 1;
    productCounter.value = productCounterValue;
  }
  //update total price
  const productPrice = document.getElementById(fieldId);
  productPrice.innerText = productCounter.value * price;
}

//-----phone case------
//event-handler for plus button
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductCounter("case-counter", true, 59, "case-price");
});

//event-handler for minus button
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductCounter("case-counter", false, 59, "case-price");
});

//--------phone---------
//event-handler for plus button
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductCounter("phone-counter", true, 1219, "phone-price");
});
//event-handler for minus button
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductCounter("phone-counter", false, 1219, "phone-price");
});
