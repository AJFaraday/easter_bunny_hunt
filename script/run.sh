script/package.sh

if [ $# -eq 0 ]
  then
    node run.js
  else
    node run.js $1
fi

