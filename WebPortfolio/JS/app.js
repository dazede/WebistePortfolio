/*day night toggle*/
const dayNightImage = document.querySelector('.day-night-toggle');
dayNightImage.onclick = function(){
  let isDay = true;
  if (dayNightImage.src.endsWith('sun.png')) {
    isDay = false;
    dayNightImage.src = '../images/moon.png';
    document.body.classList.add('night-mode');
  } else {
    isDay = true;
    dayNightImage.src = '../images/sun.png';
    document.body.classList.remove('night-mode');
  }

  localStorage .setItem('nightMode', isDay ? 'day' : 'night');
};

if (localStorage.getItem('nightMode') === 'night') {
  document.body.classList.add('night-mode');
  dayNightImage.src = '../images/moon.png'; 
}
else {
  document.body.classList.remove('night-mode'); 
  dayNightImage.src = '../images/sun.png';
}
