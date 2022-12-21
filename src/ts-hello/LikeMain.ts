import { Like } from './Like';

let like = new Like(10, false);
like.BtnClick();
console.log(`LikesCount: ${like.numOfLikes} isSelected: ${like.isBtnSelected}`);