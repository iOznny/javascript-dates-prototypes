function Client(name, money) {
    this.name = name;
    this.money = money;
}

const user = new Client('Juan', 500);

function formatClient(client) {
    const { name, money } = client;
    return `El cliente ${ name } tiene un saldo de $ ${ money }`;
}

console.log(formatClient(user));





function formatCompany(company) {
    const { name, money, category } = company;
    return `El cliente ${ name } tiene un saldo de $ ${ money } y pertenece a la categoria ${ category }`;
}

function Company(name, money, category) {
    this.name = name;
    this.money = money;
    this.category = category;
}

const company = new Company('ABC', 5000, 'Vehicles');
console.log(company);
console.log(formatCompany(company));