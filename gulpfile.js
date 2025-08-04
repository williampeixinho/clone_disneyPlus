const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}


// Função para compilar SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/images/**/*', images);
    gulp.watch('./src/scripts/*.js', scripts);
}

// Exporta as funções
exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images, scripts, gulp.series(watchFiles));
