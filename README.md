# turf node example

This is an example of how to use Turf for a scripting task with node. This
technique lets you process bigger amounts of data than you could in a browser,
and have node read and write files.

You'll need a few skills to get started:

* Basic JavaScript proficiency: you might want to do a [Codecademy](http://www.codecademy.com/) lesson
  or two to get comfortable with the language if you haven't coded before.
* A text editor for code. Good options include [Atom](https://atom.io/),
  [Sublime Text](http://www.sublimetext.com/), and [Brackets](http://brackets.io/).
* `node`: [nodejs.org](http://nodejs.org/) provides a free download and installer
  for all major platforms.
* Ability to use your terminal: [here's an introduction for Mac users](https://www.youtube.com/watch?v=I65C4ZXK4ek)

## Installation

If you have `node` installed, you also have a command called `npm` installed:
this is what you use to download extra software for `node`. This project has
some preset requirements, which are stored in [package.json](package.json),
so if you open a terminal in the same folder as this project and run the command

```sh
$ npm install
```

Then the `npm` command with automatically find, download, and install `turf`
to this directory.

Next, you should open `index.js`, either locally or
[on GitHub](index.js), read through the code comments to understand what it does.

When you feel comfortable with your understanding of the process, run it:

```sh
$ node index.js
```

This tells `node` to run the code in `index.js`. That should quickly report:

```sh
$ node index.js
saved output/convex_hull.geojson
```

And you can open the files `input/random.geojson` and `output/convex_hull.geojson`
to see what the script did.
