const hexButton = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexBgChange = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy");

//create Random Hex color
hexButton.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutPut = "";
  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColorOutPut += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }
  hexColorValue.textContent = `#${hexColorOutPut}`;
  hexBgChange.style.backgroundColor = `#${hexColorOutPut}`;
});

//rgb color
const rgbBtn = document.querySelector("#rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbContainer = document.querySelector(".rgb-color-container");
const rgbCopBtn = document.querySelector(".rgb-copy");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", () => {
  let getExtractRedValue = getRedInputRange.value;
  let getExtractGreenValue = getGreenInputRange.value;
  let getExtractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${getExtractRedValue},${getExtractGreenValue},${getExtractBlueValue})`;
  rgbContainer.style.backgroundColor = `rgb(${getExtractRedValue},${getExtractGreenValue},${getExtractBlueValue})`;
});

function copyHexColorToClipBoard() {
  console.log(hexColorValue.textContent);
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex color is copied");
}
hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipBoard() {
    
}
    rgbCopBtn.addEventListener
