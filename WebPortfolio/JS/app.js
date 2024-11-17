/*store menu open state for session*/
let menuCenter = document.querySelector('#menu-center')
menuCenter.addEventListener('click', () => {
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  sessionStorage.setItem('menuState', isOpen ? 'open' : 'closed');
});

if (sessionStorage.getItem('menuState') === 'open') {
  menu.classList.add('open');
  setTimeout(function() {
    menu.classList.toggle('active')
  }, 100);
}