// Function to handle adding product to liked items
function likeProduct(productId) {
    // Get the liked items section container
    console.log("Product liked with ID:", productId);
    const likedItemsSection = document.getElementById('liked-items');
    
    // Create a new div element for the liked product
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    
    // You can customize this part to extract and display product information
    productItem.innerHTML = `
        <div class="product-info">
            <a href="productdetail.html?productId=${productId}">Product Name</a>
            <h4>$150</h4>
        </div>
        <ul class="icons">
            <li><i class="bx bx-heart" ></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
        </ul>
    `;
    
    // Append the new product to the liked items section
    likedItemsSection.appendChild(productItem);
}
