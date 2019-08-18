// REST
const user = {
    name: 'Pedro',
    age: 34,
    company: 'CWI'
}

const { name, ...rest } = user

console.log(name)
console.log(rest)

const arr = [1, 2, 3, 4]

const [ a, b, ...c ] = arr;

console.log(a)
console.log(b)
console.log(c)

function sum (a, b) {
    return a + b
}

console.log(sum(1, 2))

function sumRest (...params) {
    return params.reduce((total, next) => total + next)
}

console.log(sumRest(1, 2, 3, 4))

// SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const user1 = {
    name: "Pedro",
    age: 34
}

const user2 = {
    ...user1,
    name: "Juca"
}

console.log(user2)