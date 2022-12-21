"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like_1 = require("./Like");
var like = new Like_1.Like(10, false);
like.BtnClick();
console.log("LikesCount: ".concat(like.numOfLikes, " isSelected: ").concat(like.isBtnSelected));
