# easter_bunny_hunt

Prerequisite:

An installation of npm and a sense of childish wonder.

Installation:

* `git clone git@github.com:AJFaraday/easter_bunny_hunt.git`
* `npm install terser -g`
* `script/package.sh`

Usage:

```bash
script/run.sh          # Run all available teams and show scoreboard
script/run.sh my_team  # Run one team and see how it fares
```

Adding an entry:

* cp template.js teams/my_team.js
* The name must be a single word identifier.
* Fill in functions for the 4 kids.
* `script/run.js my_team`