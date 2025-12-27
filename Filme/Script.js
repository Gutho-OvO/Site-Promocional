document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-enter-active');
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      const href = link.getAttribute('href');
      document.body.style.transition = 'opacity .4s ease';
      document.body.style.opacity = '0';
      setTimeout(() => window.location = href, 350);
    });
  });
});