
let Monster = require('./Monster.class.js');
let MiniMonster = require('./MiniMonster.class.js');

const OPTION_M = 100;
const OPTION_MM = 50;
const NOM_M = {name : "Griffon"};
const NOM_MM = {name : "Ogre"};

let m = new Monster(OPTION_M, NOM_M);
m.heal();
console.log(`${m._options.name} a ${m._health}pv.`);
let mM = new MiniMonster(OPTION_MM, NOM_MM);
mM.heal();
console.log(`${mM._options.name} a ${mM._health}pv.`);