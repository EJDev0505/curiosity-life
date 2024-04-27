const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');

function buildstyle() {
    return  src('css/**/*/.scss')
    .pipe(sass())
    .pipe(purgecss({content:['*.html']}))
    .pipe(dest('css'))
}

function watchTask (){
    watch(['css/**/*.scss', '*.html'], buildstyle)
}

exports.default = series(buildstyle, watchTask)