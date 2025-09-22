(function() {
  const header = fragmentElement.querySelector('.conveyors-navigation-header');
  if (!header) return;
  
  const config = configuration || {};
  
  // Apply configuration settings
  if (config.headerHeight) {
    const navContainer = header.querySelector('.nav-container');
    if (navContainer) {
      navContainer.style.height = config.headerHeight;
    }
  }
  
  if (config.showCTAButtons === false) {
    const ctaButtons = header.querySelector('.cta-buttons');
    if (ctaButtons) {
      ctaButtons.style.display = 'none';
    }
  }
  
  if (config.logoHeight) {
    const logoImg = header.querySelector('.logo-img');
    if (logoImg) {
      logoImg.style.height = config.logoHeight;
    }
  }
  
  // Mobile menu toggle functionality
  const mobileToggle = header.querySelector('.mobile-menu-toggle');
  const mobileMenu = header.querySelector('.mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Update ARIA attributes
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileMenu.classList.contains('active') && 
          !header.contains(e.target)) {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Mobile submenu toggles
  const mobileToggles = header.querySelectorAll('.mobile-nav-toggle');
  mobileToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('active');
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
      }
    });
  });
  
  // Enhanced dropdown functionality with keyboard support
  const dropdowns = header.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    const link = dropdown.querySelector('.nav-link');
    
    if (link && menu) {
      // Mouse events
      dropdown.addEventListener('mouseenter', () => {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateY(0)';
      });
      
      dropdown.addEventListener('mouseleave', () => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
      });
      
      // Keyboard events
      link.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = menu.style.opacity === '1';
          if (isOpen) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateY(-10px)';
          } else {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
          }
        }
      });
    }
  });
})();