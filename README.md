# easter_bunny_hunt

Prerequisite:

An installation of npm and a sense of childish wonder.

Installation:

* `git clone git@github.com:AJFaraday/easter_bunny_hunt.git`
* `npm install terser -g`

Usage:

```bash
script/run.sh                     # Run all available teams and show scoreboard
script/run.sh my_team my_bunny    # Run one team and see how it fares
script/run.sh my_team my_bunny 70 # Run one team and see how it fares up to turn N
```

Adding an entry:

* cp template.js teams/my_team.js
* The name must be a single word identifier (if you want to use it as an argument to run.sh)
* Fill in functions for the 4 kids.
* `script/run.js my_team`