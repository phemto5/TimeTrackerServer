var { src, dest, watch } = require("gulp");
var webpack = require("webpack");
var gulpWebpack = require("gulp-webpack");
var del = require("del");
var config = require("./webpack.config");
// gulp.task("build", function() {
//   return gulp
//     .src("src/server.ts")
//     .pipe(gulpWebpack(config, webpack))
//     .pipe(gulp.dest("dist/"));
// });
// gulp.task("start",[build],function(){

// });
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
exports.copy = copy;
exports.clean = clean;
exports.build = series(build, copy);
exports.default = series(clean, build, copy);
exports.watch = function() {
  watch("src/**.ts", series(clean, build));
};
