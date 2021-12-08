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


eventsListener();
function eventsListener() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', quoteInsurance);

}

function quoteInsurance(e) {
    e.preventDefault();

    // Read select brand
    const brand = document.querySelector('#marca').value;

    // Read select year
    const year = document.querySelector('#year').value;

    // Read select type
    const type = document.querySelector('input[name="tipo"]:checked').value;
    
    if (brand === '' || year === '' || type === '') {
        console.log('No paso la validacion');
    } else {
        console.log('Paso la validacion');
    }
}