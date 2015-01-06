var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    minHtml = require('gulp-minify-html'),
    minCss = require('gulp-minify-css'),
    bower = require('gulp-bower'),
    //combineCSS = require('combine-css'),
    dirName = './static/assets';

var filterJs = gulpFilter(['**/*.js', '!**/*.min.js']),
    filterCss = gulpFilter('**/*.css');


gulp.task('bower', function() {
    return bower('./bower_components')
        //.pipe(filterJs)
        //.pipe(uglify())
        //.pipe(filterJs.restore())
        .pipe(filterCss)
        .pipe(minCss({}))
        .pipe(filterCss.restore())
        .pipe(gulp.dest(dirName));
});

gulp.task('css', function() {
    gulp.src('./client/css/*.css')
        .pipe(minCss({keepBreaks:true}))
        /*.pipe(combineCSS({
            lengthLimit: 256,//2KB
            prefix: '_test-',
            selectorLimit: 4080
        }))*/
        .pipe(gulp.dest(dirName));
});

gulp.task('js', function() {
    gulp.src('client/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dirName));
});

gulp.task('html', function() {
    gulp.src('clients/*.html')
        .pipe(minHtml({}))
        .pipe(gulp.dest(dirName));
});

gulp.task('default', ['bower', 'css', 'js', 'html']);
