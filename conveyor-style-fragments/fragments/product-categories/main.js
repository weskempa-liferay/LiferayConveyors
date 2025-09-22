(function() {
  'use strict';
  
  function initProductCategories() {
    var fragmentElement = document.querySelector('.conveyors-product-categories');
    if (!fragmentElement) return;
    
    var configuration = fragmentElement.fragmentConfiguration || {};
    
    // Apply background color configuration
    if (configuration.backgroundColor) {
      fragmentElement.style.backgroundColor = configuration.backgroundColor;
    }
    
    // Apply grid columns configuration
    var grid = fragmentElement.querySelector('.categories-grid');
    if (grid && configuration.columnsPerRow) {
      var minWidth = Math.floor(1200 / parseInt(configuration.columnsPerRow)) - 30;
      grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${minWidth}px, 1fr))`;
    }
    
    // Add intersection observer for animation on scroll
    if ('IntersectionObserver' in window) {
      var cards = fragmentElement.querySelectorAll('.category-card');
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = (Array.from(cards).indexOf(entry.target) * 0.1) + 's';
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });
      
      cards.forEach(function(card) {
        observer.observe(card);
      });
    }
    
    // Add click tracking for analytics
    var categoryLinks = fragmentElement.querySelectorAll('.category-link');
    categoryLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var categoryTitle = this.closest('.category-card').querySelector('.category-title').textContent;
        console.log('Category clicked:', categoryTitle);
        // Add analytics tracking here if needed
      });
    });
    
    // Add hover effects for better interactivity
    var categoryCards = fragmentElement.querySelectorAll('.category-card');
    categoryCards.forEach(function(card) {
      var overlay = card.querySelector('.category-overlay');
      
      card.addEventListener('mouseenter', function() {
        if (overlay) {
          overlay.style.opacity = '1';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        if (overlay) {
          overlay.style.opacity = '0';
        }
      });
    });
    
    // Footer CTA tracking
    var footerCTAs = fragmentElement.querySelectorAll('.footer-cta');
    footerCTAs.forEach(function(cta) {
      cta.addEventListener('click', function(e) {
        var ctaText = this.textContent.trim();
        console.log('Footer CTA clicked:', ctaText);
        // Add analytics tracking here if needed
      });
    });
  }
  
  // Add CSS for animation
  var style = document.createElement('style');
  style.textContent = `
    .conveyors-product-categories .category-card {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .conveyors-product-categories .category-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductCategories);
  } else {
    initProductCategories();
  }
})();