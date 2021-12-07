const { src, dest, series} = require('gulp'); // require says 'look for gulp in the node_module folder'
const concat = require('gulp-concat')
const clean = require('gulp-clean');
function pagesTask() {
  return src('src/pages/*.html').pipe(dest('dist/pages'));
}

function scriptTask() {
  return src('src/scripts/*.js').pipe(dest('dist/scripts'));
}

function stylesTask() {
  return src('src/styles/*.css').pipe(dest('dist/styles'));
}

function deleteTask() {
  return src('dist', {read: false})
  .pipe(clean());
}

exports.default = series(pagesTask, scriptTask, stylesTask);
exports.d = deleteTask;