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
        return "Name: " + this.name + " and Age: " + this.age;
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
        console.log("Nick: " + this.nickname + " and Level: " + this.level + ". \n" + this.logDetails());
    };
    return CharAccount;
}(UserAccount));
var user = new UserAccount("samuel", 19);
var char2 = new CharAccount("samuel", 19, 'samuelnog', 99);
console.log(char2.CharInfo(), 'Char');
console.log(char2.CharInfo(), 'Char');
