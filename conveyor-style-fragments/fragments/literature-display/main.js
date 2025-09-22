(function() {
  'use strict';
  
  function initLiteratureDisplay() {
    var fragmentElement = document.querySelector('.conveyors-literature-display');
    if (!fragmentElement) return;
    
    var configuration = fragmentElement.fragmentConfiguration || {};
    
    // Apply background color configuration
    if (configuration.backgroundColor) {
      fragmentElement.style.backgroundColor = configuration.backgroundColor;
    }
    
    // Apply items per row configuration
    var grid = fragmentElement.querySelector('.literature-grid');
    if (grid && configuration.itemsPerRow) {
      var itemsPerRow = parseInt(configuration.itemsPerRow, 10);
      grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${Math.floor(1200 / itemsPerRow) - 30}px, 1fr))`;
    }
    
    // Toggle category tabs visibility
    var categoryTabs = fragmentElement.querySelector('.category-tabs');
    if (categoryTabs && configuration.showCategoryTabs !== undefined) {
      categoryTabs.style.display = configuration.showCategoryTabs ? 'flex' : 'none';
    }
    
    // Initialize category filtering
    var tabButtons = fragmentElement.querySelectorAll('.tab-button');
    var literatureItems = fragmentElement.querySelectorAll('.literature-item');
    
    tabButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        
        // Update active tab
        tabButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter items
        literatureItems.forEach(function(item) {
          var itemCategory = item.getAttribute('data-category');
          if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
    
    // Add download tracking (placeholder for analytics)
    var downloadLinks = fragmentElement.querySelectorAll('.download-link');
    downloadLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var title = this.closest('.literature-item').querySelector('.literature-title').textContent;
        console.log('Download initiated:', title);
        // Add analytics tracking here if needed
      });
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLiteratureDisplay);
  } else {
    initLiteratureDisplay();
  }
})();