$(function () {
    console.log("hello");
    $("#zoom").imagezoomsl({
      zoomrange: [4, 4],
    });

    // Product data (dummy data for demonstration)
    const products = [
      {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        price: "$100",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "./images/product1.jpg",
        sizeOptions: ["Size 1", "Size 2", "Size 3"],
      },
      {
        id: 2,
        name: "Product 2",
        category: "Category 2",
        price: "$150",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "./images/product2.jpg",
        sizeOptions: ["Size A", "Size B", "Size C"],
      },
      // Add more products here
    ];

    // Function to populate product details
    function populateProductDetails(product) {
      $("#productImage").attr("src", product.image);
      $("#productName").text(product.name);
      $("#productCategory").text(product.category);
      $("#productPrice").text(product.price);
      $("#productDescription").text(product.description);

      const sizeSelect = $("#productSize");
      sizeSelect.empty();
      product.sizeOptions.forEach((size) => {
        sizeSelect.append(`<option value="${size}">${size}</option>`);
      });
    }

    // Function to initialize related products
    function initRelatedProducts() {
      const productContainer = $(".product-list");
      products.forEach((product) => {
        const productItem = `
          <div class="product-item" data-productid="${product.id}">
            <div class="overlay">
              <a href="#" class="product-thumb">
                <img src="${product.image}" alt="${product.name}" />
              </a>
            </div>
            <div class="product-info">
              <span>${product.category}</span>
              <a href="#" class="product-name">${product.name}</a>
              <h4>${product.price}</h4>
            </div>
          </div>
        `;
        productContainer.append(productItem);
      });
    }

    // Event listener for clicking on a related product
    $(".product-list").on("click", ".product-item", function () {
      const productId = $(this).data("productid");
      const selectedProduct = products.find((product) => product.id === productId);
      if (selectedProduct) {
        populateProductDetails(selectedProduct);
      }
    });

    // Initialize related products
    initRelatedProducts();
  });