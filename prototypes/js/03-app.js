// Create prototype
function Client(name, money) {
    this.name = name;
    this.money = money;
}

Client.prototype.typeClient = function() {
    let type;

    if (this.money > 10000) {
        type = 'Gold';
    } else if (this.money > 5000) {
        type = 'Platinum';
    } else {
        type = 'Normal';
    }

    return type;
};

Client.prototype.nameClient = function name() {
    return `Nombre: ${ this.name }, Saldo: ${ this.money }, Tipo: ${ this.typeClient() }`
};

Client.prototype.withdrawBalance = function name(balance) {
    this.money -= balance;
}

const user = new Client('Juan', 6000);
console.log(user);
console.log(user.typeClient());
console.log(user.nameClient());
user.withdrawBalance(1000);
console.log(user.nameClient());



function Company(name, money, category) {
    this.name = name;
    this.money = money;
    this.category = category;
}

const company = new Company('ABC', 5000, 'Vehicles');
console.log(company);