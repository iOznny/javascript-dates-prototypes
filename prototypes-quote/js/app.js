// Constructores
function Safe(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

function UUI() { }

// Get the years
UUI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
          min = max - 10;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);    
    }
}

// Initial UI
const uui = new UUI();
console.log(uui);

document.addEventListener('DOMContentLoadede', () => {
    uui.fillOptions();
});