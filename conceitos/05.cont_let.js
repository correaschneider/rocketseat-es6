/** CONST */

/*
// const não pode ser alterada
const a = 1
a = 3
*/

// Porém pode sofrer mutação
const usuario = {name: 'Pedro'}
usuario.name = 'Juca'

console.log(usuario)

/** LET */

/** let é usada para váriaveis de escopo {} */

const test = (x) => {
    let y = 2
    
    if (x > 5) {
        let y = 4

        console.log(y)
    }
        
    console.log(x, y)
}

/** y is not defined */
// console.log(y)

test(10)
test(1)