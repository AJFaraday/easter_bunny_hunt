#!/usr/bin/env bash
script/package.sh

if [ $# -eq 0 ]
  then
    node run.js
  elif [ $# -eq 3 ]
    then
    node run.js $1 $2 $3
  else
    node run.js $1 $2
fi

