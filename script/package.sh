terser -o easter_bunny_hunt.min.js \
  game.js \
  models/*.js \
  teams/*.js


echo "module.exports = Game;" >> easter_bunny_hunt.min.js
