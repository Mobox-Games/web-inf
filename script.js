document.addEventListener('DOMContentLoaded', () => {
   const sections = document.querySelectorAll('section');

   // Анимация при прокрутке
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
           }
       });
   });

   sections.forEach(section => observer.observe(section));
});
