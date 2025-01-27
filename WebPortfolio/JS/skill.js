/*randomise bobbing of skills*/
document.querySelectorAll('.skill-petal').forEach((element) => {
    const item = getComputedStyle(element);
    const delay = item.getPropertyValue('--i') /4;
    element.style.animationDelay = `${delay}s`;
  });

  /* clone scrolling text */
  const text = document.querySelector('.scrolling-text');
  const container = document.querySelector('.scrolling-text-container');
  const clonedText = text.cloneNode(true);
  container.appendChild(clonedText);