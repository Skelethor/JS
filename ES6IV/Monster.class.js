class Monster{
    constructor(h, n)
    {
        this._health = h;
        this._options = n;
    }

    heal() {
        this._health += 10;
    } 
}
module.exports = Monster;