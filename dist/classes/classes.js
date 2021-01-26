"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.age = age;
        this.name = name;
    }
    /**
     * show user data
     */
    UserAccount.prototype.logDetails = function () {
        console.log("the player " + this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    /**
     * CharInfo
     */
    CharAccount.prototype.CharInfo = function () {
        console.log("The player " + this.nickname + " has the level: " + this.level);
    };
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        // metodos getters e setters
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
// A classe UserAccount agora é abstract então não pode ser instanciada
/*
  const sam = new UserAccount("samuel", 20);
  console.log(sam);
  console.log(sam.age);
  sam.logDetails();
*/
var char2 = new CharAccount("samuel", 20, "samuelnog", 99);
console.log(char2.getLevel);
char2.setLevel = 120;
console.log(char2.getLevel);
