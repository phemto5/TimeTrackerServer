var { src, dest, watch } = require("gulp");
var webpack = require("webpack");
var gulpWebpack = require("gulp-webpack");
var del = require("del");
var config = require("./webpack.config");
// var server = require("gulp-express");

const { series } = require("gulp");
function clean(cb) {
  del(["dist"]);
  cb();
}
function build(cb) {
  src("src/server.ts")
    .pipe(gulpWebpack(config, webpack))
    .pipe(dest("dist/"));
  cb();
}
function copy(cb) {
  cb();
}
// function start(/*cb*/) {
//   server.run(["./dist/mainserver.js"]);
//   // cb();
// }
exports.copy = copy;
exports.clean = clean;
exports.build = series(build, copy);
exports.default = series(clean, build, copy);
// exports.start = series(clean, copy, start);
exports.watch = function() {
  // start();
  watch("src/**.ts", series(clean, build, copy));
};
