const { src, dest, series} = require('gulp'); // require says 'look for gulp in the node_module folder'

function pagesTask() {
  return src('src/pages/*.html').pipe(dest('dist/pages'));
}

function scriptTask() {
  return src('src/scripts/*.js').pipe(dest('dist/scripts'));
}

function stylesTask() {
  return src('src/styles/*.css').pipe(dest('dist/styles'));
}



function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = series(pagesTask, scriptTask, stylesTask);