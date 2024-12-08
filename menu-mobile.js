document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').style.display = 
    document.querySelector('.menu').style.display === 'none' ? 'flex' : 'none';
});