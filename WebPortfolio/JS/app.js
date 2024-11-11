/* menu anims*/
let menuCenter = document.querySelector('#menu-center')
let menu = document.querySelector('#menu')
menuCenter.onclick = function(){
    menu.classList.toggle('active')
}

const listItems = document.querySelectorAll('.petal');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = "rotate(90deg) translateY(80px)";
  });
});

function onMenuNavigation(url){
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}
