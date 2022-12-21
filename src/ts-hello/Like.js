"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_numOfLikes, _isBtnSelected) {
        this._numOfLikes = _numOfLikes;
        this._isBtnSelected = _isBtnSelected;
    }
    Like.prototype.BtnClick = function () {
        this._numOfLikes += (this._isBtnSelected) ? -1 : 1;
        this._isBtnSelected = !this._isBtnSelected;
    };
    Object.defineProperty(Like.prototype, "numOfLikes", {
        get: function () {
            return this._numOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isBtnSelected", {
        get: function () {
            return this._isBtnSelected;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
