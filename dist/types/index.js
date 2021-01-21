"use strict";
// Boolean
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// Number(int, float, number)
var total;
total = 20;
// Array (type[])
var items;
items = [1, 2, 3, 4];
var values;
values = [1, 2, 3, 4];
// tuple ()
var title;
title = [2, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["black"] = "#000";
    Colors["white"] = "#fff";
})(Colors || (Colors = {}));
// any *evitar*
var coisa;
// void (vazio) usar quando for tipar funções sem return
function logger() {
    console.log('foo');
}
// null | undefined
var variable;
// never (significa que a função nunca vai retornar, ou seja, ela em algum momento vai levantar alguma exceção ou vai finalizar o código)
throw new Error("error");
function error() {
    throw new Error("error");
}
// object (tudo aquilo que não é nem string, array, number ou boolean. ou seja é qualquer coisa)
var cart;
cart = {
    foo: 'bar'
};
