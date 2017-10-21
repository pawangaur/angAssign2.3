var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getter = function () {
        if (this.username)
            return 'The username ' + this.username + ' is a valid user.';
        else
            return 'The user is not valid';
    };
    User.prototype.setter = function (val) {
        this.username = val;
    };
    return User;
}());
