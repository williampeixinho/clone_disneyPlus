const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

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

// Função para assistir alterações nos arquivos
function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/images/**/*', images);
}

// Exporta as funções
exports.styles = styles;
exports.images = images;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images, watchFiles);
