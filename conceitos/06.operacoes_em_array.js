/** map, percorre todos os itens de um array */
const arr = [2, 3, 6, 8, 9]

const newArr = arr.map((item, index) => item + index)

console.log(arr)
console.log(newArr)

/** reduce, reduz todo o array em um unico valor */
const sum = arr.reduce((total, next) => total + next)

console.log(sum)

/** filter, filtra um array */
const filter = arr.filter(item => item % 2 === 0)

console.log(filter)

/** find, busca um item no array */
const find = arr.find(item => item === 3)

console.log(find)