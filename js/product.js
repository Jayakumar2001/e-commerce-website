document.addEventListener('DOMContentLoaded', function() {
  const productThumbs = document.querySelectorAll('.product-thumb');
  const productNames = document.querySelectorAll('.product-info a');

  productThumbs.forEach(thumb => {
    thumb.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'productdetail.html';
    });
  });

  productNames.forEach(name => {
    name.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'productdetail.html';
    });
  });
});
