/* menu anims*/
let menuCenter = document.querySelector('#menu-center')
let menu = document.querySelector('#menu')
menuCenter.onclick = function(){
    menu.classList.toggle('active')
}

let menuItem = document.querySelector('.img-text')
menuItem.onclick = function(){
    menuItem.style.transform = "translateX(-50px)";;
}

function onMenuNavigation(url){
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}