var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    Point.prototype.getX = function () {
        return this._x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error("Value cannot be less than 0");
        this._x = value;
    };
    return Point;
}());
var pointer = new Point(10, 20);
pointer.setX(100);
var x = pointer.getX();
console.log(x);
