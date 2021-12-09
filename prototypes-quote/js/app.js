// Constructores
function Safe(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Make the quote with the data
Safe.prototype.makeQuote = function() {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */

    let quantity;
    const base = 2000;

    switch (this.brand) {
        case '1':
            quantity = base * 1.15;
        break;

        case '2':
            quantity = base * 1.05;
        break;

        case '3':
            quantity = base * 1.35;
        break;
    }

    // Read the year
    const difference = new Date().getFullYear() - this.year;

    // Each year of difference you have to reduce the value of the insurance by 3%
    quantity -= ((difference * 3) * quantity) / 100;    

    /*
        If the insurance is basic, it is multiplied by 30% more
        If the insurance is complete 50% more
    */
    if (this.type === 'basico') {
        quantity *= 1.30;
    } else {
        quantity *= 1.50;
    }

    return quantity;
}




function UUI() { }

// Get the years
UUI.prototype.fillOptions = function() {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;        
        selectYear.appendChild(option);    
    }
}

// Show result
UUI.prototype.showTotal = function(safe, total) {
    
    const { brand, year, type } = safe;
    let textbrand;
    switch (brand) {
        case '1':
            textbrand = 'Americano';
        break;

        case '2':
            textbrand = 'Asiatico';
        break;

        case '3':
            textbrand = 'Europeo';
        break;
    }

    // Create result
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resume</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${ textbrand } </span> </p>
        <p class="font-bold">Año: <span class="font-normal"> ${ year } </span> </p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${ type } </span> </p>
        <p class="font-bold">Total: <span class="font-normal">$ ${ total } </span> </p>
    `;

    // Show spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';

        // Add result in html
        const divResult = document.querySelector('#resultado');
        divResult.appendChild(div);
    }, 3000);
}

// Show alerts in window
UUI.prototype.showMessage = function(message, type) {
    const div = document.createElement('div');

    if (type === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = message;

    // Put in html
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Initial UI
const uui = new UUI();

document.addEventListener('DOMContentLoaded', () => {
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
    
    // We check that the fields are not empty
    if (brand === '' || year === '' || type === '') {
        uui.showMessage('Todos los campos son obligatorios.', 'error');
        return;
    } 

    uui.showMessage('Cotizando...', 'correcto');   
    
    // Hidden previus quotes 
    const answers = document.querySelector('#resultado div');
    if (answers != null) {
        answers.remove();
    }

    // Initialize insurance
    const safe = new Safe(brand, year, type);
    const total = safe.makeQuote();

    // Use the prototype to quote
    uui.showTotal(safe, total);
}