Game = require('./easter_bunny_hunt.min.js');

if(process.argv[4]) {
  Game.run_to_turn(process.argv[2], process.argv[3], process.argv[4]);
}
else if(process.argv[2]) {
  Game.run_one(process.argv[2], process.argv[3]);
} else {
  Game.run_all();
}
