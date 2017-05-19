// This is a simple demonstration of how to use turfjs to process
// data with a node script. See the README.md file for full instructions
// on how to install node and run this script: these code comments will describe,
// in depth, how the script works.

// If you ran the installation instructions in README.md, you will have
// run an `npm install` command. This command downloads turf and puts it
// in a local folder called `node_modules`. You can include any of the
// files in the `node_modules` directory in another script by using the
// `require()` function, which takes the name of a module and returns
// an object of the things it exposes. For instance, when we call
// the following line, the variable `turf` becomes the turf library,
// including all of its component functions like `turf.extent` and
// `turf.buffer`
var turf = require('@turf/turf');

// The only other library than turf we'll use in this example is the 'fs'
// module. This is short for 'filesystem' and gives us functions that
// read and write local files. We'll use its functions to bring a GeoJSON
// file into a variable and write a GeoJSON object out to a file.
//
// The 'fs' module is included with node, so you never have to install it
// separately, and you can find all of its documentation on nodejs.org.
var fs = require('fs');

// Okay, so now we've included all of the libraries we'll be using in this script.
// Let's load the data. In the 'input' directory, there's a file called
// 'random.geojson' that includes random points. The fs.readFileSync()
// command lets us read that file into a variable in node:
var randomPoints = fs.readFileSync('./input/random.geojson');

// This loads the file into a string, but you haven't told node how to
// understand that value: it could geographic data, or a music file, or
// a word document. To parse the file into an _object_ so that we can
// treat it as GeoJSON, we'll need to use `JSON.parse`. Like `fs`, JSON.parse
// is built into the environment so we don't need to do any extra
// work to get it. It takes a single parameter of a string, and returns
// a parsed object.
//
// JSON.parse works here because GeoJSON is built on JSON: JSON is the
// very basic nuts and bolts of how numbers and values work, whereas
// GeoJSON is a set of patterns for storing geographic data.
randomPoints = JSON.parse(randomPoints);

// So we now have the randompoints.geojson file loaded into a variable
// called randomPoints as a GeoJSON object. This is the kind of data
// that turf expects, so we can use turf to process it! There
// are many turf functions (see turfjs.org for the full list & documentation)
// but we'll just use turf.convex() to get a Convex Hull of the points:
// the smallest possible polygon that could fit all of them inside.
//
// The turf.convex function simply takes a GeoJOSN object as input and
// returns one as output
var convexHull = turf.convex(randomPoints);

// Okay, so now we've done our computation, it's time to save the results.
// This is the 'fs' module from before, but instead of readFileSync() to
// read an existing file, we'll use writeFileSync() to save a new file.
//
// We'll also use the JSON methods again, this time to turn our
// JavaScript variable back into a string of formatted data
// so that it can be saved.
fs.writeFileSync('./convex_hull.geojson', JSON.stringify(convexHull));

// And there we are: you can look at these files by finding them on your computer
// and opening them in a system like geojson.io, TileMill, QGIS, or ArcGIS:
// GeoJSON works almost everywhere!

// Finally, we'll just log a nice little message to tell you that it all worked.
console.log('saved convex_hull.geojson');
