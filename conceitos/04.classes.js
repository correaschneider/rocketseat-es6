class List {
    constructor() {
        this.data = []
    }

    add(item) {
        this.data.push(item)
    }

    getData() {
        return this.data
    }
}

class ToDoList extends List{
    constructor() {
        super()

        this.user = 'Pedro'
    }

    getUser() {
        return this.user
    }
}

class MyMath {
    static sum(a, b) {
        return a + b
    }
}

const MyList = new ToDoList()

console.log(MyList.getUser())
console.log(MyMath.sum(1, 1))

document.getElementById('addToDo').onclick = () => {
    MyList.add('Novo Item')
    console.log(MyList.getData())
}