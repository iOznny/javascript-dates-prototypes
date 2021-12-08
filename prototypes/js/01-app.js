const client = {
    name: 'Demo',
    money: 500
};

console.log(client);
console.log(typeof client);

function Client(name, money) {
    this.name = name;
    this.money = money;

}

const user = new Client('Juan', 500);
console.log(user);