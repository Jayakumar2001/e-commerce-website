// Function to update the subtotal for a product row
function updateSubtotal(row) {
    const quantity = row.querySelector('.quantity').value;
    const priceString = row.querySelector('.price').innerText;
    const price = parseFloat(priceString.replace('$', ''));
    const subtotal = quantity * price;
    row.querySelector('.subtotal').textContent = '$' + subtotal.toFixed(2);
    updateTotalPrice(); // Update the total price after updating subtotal
  }
  
  // Function to update the total price based on all subtotals
  function updateTotalPrice() {
    let totalPrice = 0;
    const subtotalElements = document.querySelectorAll('.subtotal');
    subtotalElements.forEach(subtotalElement => {
      totalPrice += parseFloat(subtotalElement.textContent.replace('$', ''));
    });
    document.getElementById('totalPrice').textContent = '$' + totalPrice.toFixed(2);
  }
  
  // Function to handle removing a product row
  function removeProduct(row) {
    row.remove();
    updateTotalPrice(); // Update the total price after removing a product
  }
  
  // Event listener for quantity change
  const quantityInputs = document.querySelectorAll('.quantity');
  quantityInputs.forEach(input => {
    input.addEventListener('change', function() {
      const row = this.closest('.product-row');
      updateSubtotal(row);
    });
  });
  
  // Event listener for remove button click
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const row = this.closest('.product-row');
      removeProduct(row);
    });
  });
  