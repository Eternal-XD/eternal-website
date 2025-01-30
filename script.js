const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
 
 document.querySelectorAll('.faq-question').forEach(question => {
   question.addEventListener('click', () => {
     const faqItem = question.parentElement;
     faqItem.classList.toggle('active');
   });
 });
 