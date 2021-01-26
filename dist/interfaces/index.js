"use strict";
var tlou = {
    title: "The Last of Us",
    description: "it's definaly a game",
    genre: "action",
    platform: ["PC"],
    getSimilar: function (title) {
        console.log("Similar title: ", title);
    },
};
console.log("GTA");
var leftbehind = {
    title: "The Last of us",
    description: "it's definaly a game",
    genre: "action",
    platform: ["PC"],
    getSimilar: function (title) {
        console.log("Similar title: ", title);
    },
    originalGame: tlou,
    newContet: "New history...",
};
console.log(leftbehind);
// usando uma interface dentro de uma classe
var CreateGame = /** @class */ (function () {
    function CreateGame(t, g, d, p) {
        this.title = t;
        this.genre = g;
        this.description = d;
        this.platform = p;
    }
    return CreateGame;
}());
