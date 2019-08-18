const user = {
    name: 'Pedro',
    age: 34,
    address: {
        city: 'Novo Hamburgo',
        state: 'RS'
    }
}

/** Sem desestruturacao */
/**
const name = user.name
const age = user.age
const city = user.address.city
*/

const { name, age, address: { city } } = user

console.log(name)
console.log(age)
console.log(city)

function showName({ name }) {
    console.log(name)
}

showName(user)