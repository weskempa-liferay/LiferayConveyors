(function() {
  const companyInfo = fragmentElement.querySelector('.conveyors-company-info');
  if (!companyInfo) return;
  
  const config = configuration || {};
  
  // Apply configuration settings
  if (config.backgroundColor) {
    companyInfo.style.backgroundColor = config.backgroundColor;
  }
  
  if (config.layout === 'single-column') {
    const hero = companyInfo.querySelector('.company-hero');
    if (hero) {
      hero.style.gridTemplateColumns = '1fr';
      hero.style.textAlign = 'center';
    }
  }
  
  if (config.showFeatures === false) {
    const features = companyInfo.querySelector('.company-features');
    if (features) {
      features.style.display = 'none';
    }
  }
  
  // Animate features on scroll if IntersectionObserver is available
  if (typeof IntersectionObserver !== 'undefined') {
    const features = companyInfo.querySelectorAll('.feature-item');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    features.forEach((feature, index) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(20px)';
      feature.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(feature);
    });
  }
})();