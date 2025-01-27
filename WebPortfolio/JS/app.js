/*day night toggle*/
const dayNightImage = document.querySelector('.day-night-toggle');
dayNightImage.onclick = function(){
  let isDay = true;
  if (dayNightImage.src.endsWith('sun.PNG')) {
    isDay = false;
    dayNightImage.src = 'WebPortfolio\/images\/moon.PNG';
    document.body.classList.add('night-mode');
  } else {
    isDay = true;
    dayNightImage.src = 'WebPortfolio\/images\/sun.PNG';
    document.body.classList.remove('night-mode');
  }

  localStorage .setItem('nightMode', isDay ? 'day' : 'night');
};

if (localStorage.getItem('nightMode') === 'night') {
  document.body.classList.add('night-mode');
  dayNightImage.src = 'WebPortfolio\/images\/moon.PNG'; 
}
else {
  document.body.classList.remove('night-mode'); 
  dayNightImage.src = 'WebPortfolio\/images\/sun.PNG';
}
