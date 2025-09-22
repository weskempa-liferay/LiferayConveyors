(function() {
  'use strict';
  
  function initFooter() {
    var fragmentElement = document.querySelector('.conveyors-footer');
    if (!fragmentElement) return;
    
    var configuration = fragmentElement.fragmentConfiguration || {};
    
    // Apply background color configuration
    if (configuration.backgroundColor) {
      fragmentElement.style.backgroundColor = configuration.backgroundColor;
    }
    
    // Apply footer height configuration
    if (configuration.footerPadding) {
      fragmentElement.style.paddingTop = configuration.footerPadding;
    }
    
    // Toggle contact info visibility
    var contactInfo = fragmentElement.querySelector('.contact-info');
    if (contactInfo && configuration.showContactInfo !== undefined) {
      contactInfo.style.display = configuration.showContactInfo ? 'flex' : 'none';
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();