/** Exercício 1 */

class User {
    constructor (email, password) {
        this.email = email
        this.password = password

        this.admin = false
    }

    isAdmin () {
        return this.admin
    }
}

class Admin extends User {
    constructor (email, password) {
        super(email, password)

        this.admin = true
    }
}

const User1 = new User('email@test.com', 'senha123');
const Admin1 = new Admin('email@test.com', 'senha123');

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())

/** Exercício 2 */

const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

/** Exercício 2.1 */

const ages = users.map(user => user.age)
console.log(ages)

/** Exercício 2.2 */

const workersRocketseat = users.filter(user => user.company == 'Rocketseat' && user.age >= 18)
console.log(workersRocketseat)

/** Exercício 2.3 */

const workersGoogle = users.find(user => user.company == 'Google')
console.log(workersGoogle)

/** Exercício 2.4 */

const youngs = users.map(user => {
    user.age *= 2

    return user
}).filter(user => user.age <= 50)

console.log(youngs)

/** Exercício 3 */

/** Exercício 3.1 */

const arr = [1, 2, 3, 4, 5];

/**
 * arr.map(function(item) {
 *     return item + 10;
 * });
 */

console.log(arr.map(item => item + 10))

/** Exercício 3.2 */

const user = { name: 'Pedro', age: 34 };

/**
 * function showAge(user) {
 *     return user.age;
 * }
 */

const showAge = user => user.age

console.log(showAge(user));

/** Exercício 3.3 */

const name = "Pedro";
const age = 34;

/**
 * function showUser(name = 'Diego', age = 18) {
 *     return { name, age };
 * }
 */

const showUser = (name = 'Pedro', age = 34) => ({ name, age })

console.log(showUser(name, age));
console.log(showUser(name));

/** Exercício 3.4 */

/**
 * const promise = function () {
 *     return new Promise(function (resolve, reject) {
 *         return resolve();
 *     })
 * }
 */

const promise = () => new Promise((resolve, reject) => resolve())
console.log(promise())

/** Exercício 4 */

/** Exercício 4.1 */

const company = {
    corporate_name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
}

const {corporate_name, address: {city, state}} = company

console.log(corporate_name)
console.log(city)
console.log(state)

/** Exercício 4.2 */

/**
 * function showInfo(user) {
 *     return `${user.name} tem ${user.age} anos.`;
 * }
 */

const showInfo = ({ name, age }) => `${name} tem ${age} anos.`;

console.log(showInfo({ name: 'Pedro', age: 34 }))

/** Exercício 5 */

/** Exercício 5.1 */

const arr5 = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr5

console.log(x)
console.log(y)

const sum = (...x) => x.reduce((total, next) => total + next)

console.log(sum(1, 2))

/** Exercício 5.2 */

const user5 = {
    name: 'Pedro',
    age: 34,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
        contry: 'Brasil',
    }
}

const user52 = { ...user5, name: 'Gabriel' }
const user53 = { ...user5, address: { city: 'Lontras' } }

console.log(user5)
console.log(user52)
console.log(user53)

/** Exercício 6 */

const userName = 'Pedro'
const userAge = 34

console.log(`O usuário ${userName} possui ${userAge} anos`)

/** Exercício 7 */

const name7 = 'Pedro'
const age7 = 34

const user7 = {
    name,
    age7,
    city: 'Rio do Sul',
}

console.log(user7)