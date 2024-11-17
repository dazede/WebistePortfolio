/*randomise bobbing of skills*/
document.querySelectorAll('.skill-petal').forEach((element) => {
    const item = getComputedStyle(element);
    const delay = item.getPropertyValue('--i') /4;
    element.style.animationDelay = `${delay}s`;
  });