(function() {
  'use strict';
  
  function initTestimonialsCarousel() {
    var fragmentElement = document.querySelector('.conveyors-testimonials-carousel');
    if (!fragmentElement) return;
    
    var configuration = fragmentElement.fragmentConfiguration || {};
    var slides = fragmentElement.querySelectorAll('.testimonial-slide');
    var indicators = fragmentElement.querySelectorAll('.indicator');
    var prevBtn = fragmentElement.querySelector('.prev-btn');
    var nextBtn = fragmentElement.querySelector('.next-btn');
    var currentSlide = 0;
    var autoplayInterval;
    
    // Apply configuration
    if (configuration.backgroundColor) {
      fragmentElement.style.background = configuration.backgroundColor;
    }
    
    if (configuration.autoplaySpeed && configuration.autoplay) {
      startAutoplay(parseInt(configuration.autoplaySpeed) * 1000);
    }
    
    // Show specific slide
    function showSlide(index) {
      slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === index);
      });
      
      indicators.forEach(function(indicator, i) {
        indicator.classList.toggle('active', i === index);
      });
      
      currentSlide = index;
    }
    
    // Go to next slide
    function nextSlide() {
      var next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }
    
    // Go to previous slide
    function prevSlide() {
      var prev = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prev);
    }
    
    // Start autoplay
    function startAutoplay(speed) {
      if (autoplayInterval) clearInterval(autoplayInterval);
      autoplayInterval = setInterval(nextSlide, speed);
    }
    
    // Stop autoplay
    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }
    
    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        stopAutoplay();
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        stopAutoplay();
      });
    }
    
    indicators.forEach(function(indicator, index) {
      indicator.addEventListener('click', function() {
        showSlide(index);
        stopAutoplay();
      });
    });
    
    // Pause autoplay on hover
    fragmentElement.addEventListener('mouseenter', stopAutoplay);
    fragmentElement.addEventListener('mouseleave', function() {
      if (configuration.autoplay) {
        startAutoplay(parseInt(configuration.autoplaySpeed || 5) * 1000);
      }
    });
    
    // Touch/swipe support for mobile
    var touchStartX = 0;
    var touchEndX = 0;
    
    fragmentElement.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    fragmentElement.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var threshold = 50;
      
      if (touchStartX - touchEndX > threshold) {
        // Swipe left - next slide
        nextSlide();
        stopAutoplay();
      } else if (touchEndX - touchStartX > threshold) {
        // Swipe right - previous slide
        prevSlide();
        stopAutoplay();
      }
    });
    
    // Initialize first slide
    showSlide(0);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
  } else {
    initTestimonialsCarousel();
  }
})();