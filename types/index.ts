// Boolean
let isOpen: boolean

isOpen = true

// string ('foo', "foo", `foo`)
let message: string

message = `foo ${isOpen}`

// Number(int, float, number)

let total: Number

total = 20

// Array (type[])

let items: number[]

items = [1,2,3,4]

let values: Array<number>

values = [1,2,3,4]

// tuple ()

let title: [Number, string]

title = [2, 'foo']

// enum

enum Colors {
    black = '#000',
    white = '#fff'
}

// any *evitar*

let coisa: any


// void (vazio) usar quando for tipar funções sem return

function logger() {
    console.log('foo');
}

// null | undefined

let variable: null


// never (significa que a função nunca vai retornar, ou seja, ela em algum momento vai levantar alguma exceção ou vai finalizar o código)

throw new Error("error")

function error(): never {
    throw new Error("error")
}

// object (tudo aquilo que não é nem string, array, number ou boolean. ou seja é qualquer coisa)

let cart: object

cart = {
    foo: 'bar'
}