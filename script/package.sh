terser -o easter_bunny_hunt.min.js \
  config.js \
  game.js \
  models/*.js \
  teams/*.js \
  bunnies/*.js


echo "module.exports = Game;" >> easter_bunny_hunt.min.js
