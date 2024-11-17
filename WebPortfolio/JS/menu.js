/* menu anims*/
let menu = document.querySelector('#menu')
menuCenter.onclick = function(){
    menu.classList.toggle('active')
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