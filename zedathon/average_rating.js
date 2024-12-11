function calculateAverageRating(reviews) {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
}

// Display the average rating
function displayAverageRating() {
    fetch('http://localhost:3000/api/reviews')
        .then((response) => response.json())
        .then((data) => {
            const averageRating = calculateAverageRating(data);
            document.getElementById('average-rating').innerText = `Average Rating: ${averageRating}/5`;
        });
}
