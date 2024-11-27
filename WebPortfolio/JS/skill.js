/*randomise bobbing of skills*/
document.querySelectorAll('.skill-petal').forEach((element) => {
    const item = getComputedStyle(element);
    const delay = item.getPropertyValue('--i') /4;
    element.style.animationDelay = `${delay}s`;
  });

  /* clone scrolling text */
  const text = document.getElementById('.scrolling-text');
  const clonedText = text.cloneNode(true);
  container.appendChild(clonedText);