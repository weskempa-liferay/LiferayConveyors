(function() {
  const showcase = fragmentElement.querySelector('.conveyors-product-showcase');
  if (!showcase) return;
  
  const config = configuration || {};
  
  // Apply configuration settings
  if (config.backgroundColor) {
    showcase.style.backgroundColor = config.backgroundColor;
  }
  
  if (config.productsPerRow) {
    const grid = showcase.querySelector('.products-grid');
    if (grid) {
      const minWidth = config.productsPerRow === '2' ? '400px' : 
                       config.productsPerRow === '3' ? '300px' : '280px';
      grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${minWidth}, 1fr))`;
    }
  }
  
  if (config.showViewAll === false) {
    const footer = showcase.querySelector('.showcase-footer');
    if (footer) {
      footer.style.display = 'none';
    }
  }
  
  // Add loading animation for images
  const images = showcase.querySelectorAll('.product-image img');
  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    
    // Handle both new loads and cached images
    if (img.complete && img.naturalWidth > 0) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', function() {
        this.style.opacity = '1';
      });
      // Fallback timeout for edge cases
      setTimeout(() => {
        if (img.style.opacity === '0') {
          img.style.opacity = '1';
        }
      }, 1000);
    }
  });
})();