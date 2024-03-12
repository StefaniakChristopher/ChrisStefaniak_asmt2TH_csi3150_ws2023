const hideLetter = (letter) => {
  const letterElement = document.getElementById(letter);
  letterElement.style.visibility = "hidden";
};

const showLetter = (letter) => {
  const letterElement = document.getElementById(letter);
  letterElement.style.visibility = "visible";
};
