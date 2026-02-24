document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Handle checkout button clicks
  const checkoutButtons = document.querySelectorAll('.checkout-btn');
  
  checkoutButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const checkoutUrl = button.getAttribute('data-checkout-link');
      
      if(checkoutUrl && checkoutUrl.includes('http')) {
        window.location.href = checkoutUrl;
      } else {
        alert('Configuration error: Checkout link is not set up.');
        console.error('Missing checkout URL in data attribute');
      }
    });
  });

  // 2. FAQ Logic (Accordion)
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if(otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // 3. Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          const headerOffset = 80; 
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
