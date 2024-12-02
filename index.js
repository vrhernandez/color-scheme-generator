const schemeForm = document.getElementById("scheme-form")


schemeForm.addEventListener("submit", () => {
const baseURL = "https://www.thecolorapi.com"
const hex = "000000"
const mode = "monochrome"

fetch(`${baseURL}/scheme?hex=${hex}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        const colorList = data.colors
        colorList.forEach(color => {
            console.log(color.hex.value)
        });
    })
})