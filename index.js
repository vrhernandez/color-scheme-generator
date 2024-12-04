const schemeForm = document.getElementById("scheme-form")

schemeForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const baseURL = "https://www.thecolorapi.com"
    const hex = document.getElementById("color-picker").value.substring(1)
    const mode = document.getElementById("mode-selector").value

    fetch(`${baseURL}/scheme?hex=${hex}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const colorList = data.colors
            colorList.forEach(function(color, index) {
                const colorBarEl = document.getElementById(`color-${index}`)
                const hexEl = document.getElementById(`hex-${index}`)
                colorBarEl.style.backgroundColor = color.hex.value
                hexEl.textContent = color.hex.value
            })
        })
})