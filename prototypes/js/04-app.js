// Herencia
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





function Person(name, money, phone) {
    Client.call(this, name, money);
    this.phone = phone;
}

// Extendes of Client at Person
Person.prototype = Object.create(Client.prototype);

// Generate constructor of Client
Person.prototype.constructor = Client;

const demo = new Person('Juan', 5000, 1234567890);
console.log(demo);
console.log(demo.nameClient());

Person.prototype.showPhone = function() {
    return `El telefono es ${ this.phone }`;
}

console.log(demo.showPhone());