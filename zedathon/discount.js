document.getElementById('discountForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way

  // Get the discount code entered by the user
  const discountCode = document.getElementById('discountCode').value;

  // Make a POST request to the backend
  fetch('http://localhost:3000/apply-discount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ discountCode }),
  })
  .then(response => response.json())
  .then(data => {
    // Display the result
    const discountResult = document.getElementById('discountResult');
    if (data.success) {
      discountResult.innerHTML = `Discount applied: ${data.discount}% off!`;
    } else {
      discountResult.innerHTML = data.message; // Show error message
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
