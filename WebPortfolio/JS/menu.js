/*store menu open state for session*/
let menuCenter = document.querySelector('#menu-center')
let menu = document.querySelector('#menu')
  menuCenter.addEventListener('click', () => {
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  localStorage.setItem('menuState', isOpen ? 'open' : 'closed');
});

if (localStorage.getItem('menuState') === 'open') {
  menu.classList.add('open');
  setTimeout(function() {
    menu.classList.toggle('active'),
    menuCenter.classList.toggle('active'),
    menuCenter.style.transform = "rotate(720deg)"
  }, 100);
}

/* menu anims*/
menuCenter.onclick = function(){
    menu.classList.toggle('active'),
    menuCenter.classList.toggle('active'),
    menuCenter.style.transform = localStorage.getItem('menuState') === 'open' ? "rotate(360deg)" : "rotate(-360deg)";
}

/*animate menu 'petal' on click*/
const listItems = document.querySelectorAll('.petal');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.transition = "transform 0.9s ease-in-out, opacity 1s ease";
    item.style.transform = "rotate(90deg) translateY(80px) rotate3d(0, 1, 0, 360deg)";
    item.style.opacity = "0";
  });
});

/*delay menu navigation for anim*/
function onMenuNavigation(url){
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}