document.getElementById('discountForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission
  
  // Get the discount code and cart total from the form
  const discountCode = document.getElementById('discountCode').value;
  const cartTotal = parseFloat(document.getElementById('cartTotal').value);  // Assuming you have an input or variable for cart total
  
  // Make a POST request to the backend
  fetch('http://localhost:3000/apply-discount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: discountCode, cartTotal: cartTotal }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.discountAmount) {
      // Show the discount amount and new total
      const discountResult = document.getElementById('discountResult');
      discountResult.innerHTML = `Discount applied: ${data.discountAmount} <br> New Total: ${data.newTotal}`;
    } else {
      // Show an error message if the code is invalid or expired
      const discountResult = document.getElementById('discountResult');
      discountResult.innerHTML = `Error: ${data.message}`;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
