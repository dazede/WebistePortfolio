/* menu anims*/
let menuCenter = document.querySelector('#menu-center')
let menu = document.querySelector('#menu')
menuCenter.onclick = function(){
    menu.classList.toggle('active')
}

/*animate menu 'petal' on click*/
const listItems = document.querySelectorAll('.petal');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = "rotate(90deg) translateY(80px)";
  });
});

/*delay menu navigation for anim*/
function onMenuNavigation(url){
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}

/*store menu open state for session*/
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