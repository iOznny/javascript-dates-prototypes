let value;
const now = new Date();

value = now;
console.log(value);

const date = new Date('06-08-1999');
console.log(date);

// Get year
const year = new Date().getFullYear();
console.log('getFullYear', year);

// Get month
const month = new Date().getMonth();
console.log('getMonth', month);

// Get hours
const hour = new Date().getHours();
console.log('getHours', hour);

// Get minutes
const minute = new Date().getMinutes();
console.log('getMinutes', minute);

// Get secounds
const secound = new Date().getSeconds();
console.log('getSeconds', secound);

// Get time
const time = new Date().getTime();
console.log('getTime', time);



// Set year
value = now.setFullYear('2010');
console.log('Set year', now);