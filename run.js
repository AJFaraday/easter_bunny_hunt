Game = require('easter_bunny_hunt.js.min');

if(process.argv[2]){
  Game.run_one(process.argv[2]);
} else {
  Game.run_all();
}
