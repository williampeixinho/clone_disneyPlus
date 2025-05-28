const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(plumber()) // impede que o processo quebre em erro
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}
exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}