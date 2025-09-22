(function() {
  const banner = fragmentElement.querySelector('.conveyors-hero-banner');
  if (!banner) return;
  
  const config = configuration || {};
  
  // Apply configuration settings
  if (config.bannerHeight) {
    banner.style.minHeight = config.bannerHeight;
  }
  
  if (config.textAlignment) {
    const textContent = banner.querySelector('.hero-text-content');
    if (textContent) {
      textContent.style.textAlign = config.textAlignment;
    }
  }
  
  if (config.showOverlay === false) {
    const overlay = banner.querySelector('.hero-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
  
  // Add smooth scroll for anchor links
  const ctaButtons = banner.querySelectorAll('.hero-cta');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
})();