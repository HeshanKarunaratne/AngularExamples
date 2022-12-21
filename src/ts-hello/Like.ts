export class Like {
    constructor(private _numOfLikes: number, private _isBtnSelected: boolean) { }

    BtnClick() {
        this._numOfLikes += (this._isBtnSelected) ? -1 : 1;
        this._isBtnSelected = !this._isBtnSelected;
    }

    get numOfLikes() {
        return this._numOfLikes;
    }

    get isBtnSelected() {
        return this._isBtnSelected;
    }
}
