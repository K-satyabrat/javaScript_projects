const hexButton = document.querySelector(".hex-btn")
const hexColorValue = document.querySelector(".hex-color-value")
const hexBgChange = document.querySelector(".hex-color-container")

//create Random Hex color
hexButton.addEventListener('click',()=>{
    let characterSet = '0123456789ABCDEF'
    let hexColorOutPut = ''
    for(let i = 0, characterSetLength=characterSet.length;i<6;i++){
        hexColorOutPut += characterSet.charAt(
            Math.floor(Math.random()* characterSetLength)
        )
    }
    hexColorValue.textContent = `#${hexColorOutPut}`
    hexBgChange.style.backgroundColor = `#${hexColorOutPut}`
    console.log(hexColorOutPut)
})