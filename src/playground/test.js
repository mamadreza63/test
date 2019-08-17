console.log('this is from test.js');

const user = {
    name: 'ali',
    age: 35,
    getName() {
        return this.name;
    }
}

console.log(user.getName());

const {name:h, age:s} = user;

console.log(h);
console.log(s);

