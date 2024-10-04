// Get the button container and the result paragraph
const buttonContainer = document.getElementById('button-container');
const resultParagraph = document.getElementById('result');

// Create an array to store the selected products
let selectedProducts = [];

// Add event listeners to each button
for (let i = 1; i <= 11; i++) {
  const button = document.getElementById(`button-${i}`);
  button.addEventListener('click', () => {
    // Add the product to the selected products array
    selectedProducts.push({
      name: button.getAttribute('data-name'),
      price: parseFloat(button.value)
    });
    // Update the result paragraph
    resultParagraph.textContent = `محصول: ${selectedProducts.map(product => product.name).join(' ، ')}`;
  });
}

// Add an event listener to the calculate button
const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', () => {
  // Calculate the average price of the selected products
  const totalPrice = selectedProducts.reduce((a, b) => a + b.price, 0);
  const averagePrice = totalPrice / selectedProducts.length;
  // Update the result paragraph
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  resultParagraph.textContent = `میانگین قیمت: ${formatNumber(averagePrice)}`;
});

// Add an event listener to the clear button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  // Reset the selected products array
  selectedProducts = [];
  // Update the result paragraph
  resultParagraph.textContent = 'پاکسازی انجام شد';
});
