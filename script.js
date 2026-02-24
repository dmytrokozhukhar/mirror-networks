document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Logic for Invoice Request
  const invoiceButtons = document.querySelectorAll('.invoice-btn');
  const contactEmail = 'billing@mirrornetworks.example'; // Замени на свой реальный email
  
  invoiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const packageName = button.getAttribute('data-package');
      const price = button.getAttribute('data-price');
      
      // Формируем предзаполненное письмо
      const subject = encodeURIComponent(`Invoice Request: ${packageName}`);
      const body = encodeURIComponent(
        `Hello Mirror Networks Team,\n\nI would like to request an invoice for the following B2B service:\n\n` +
        `- Package: ${packageName}\n` +
        `- Price: €${price}\n\n` +
        `Please send the PayPal invoice to this email address. Let me know what details you need from me to start the configuration.\n\nBest regards,`
      );
      
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
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

  // 3. Smooth scrolling
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
