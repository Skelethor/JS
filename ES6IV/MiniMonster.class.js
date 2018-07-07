let Monster = require('./Monster.class.js');

class MiniMonster extends Monster{
    constructor(h, n){
        super(h, n);
    }
    heal() {
        this._health += 5;
    } 
}
module.exports = MiniMonster;