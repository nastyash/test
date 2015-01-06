var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    minHtml = require('gulp-minify-html'),
    minCss = require('gulp-minify-css'),
    bower = require('gulp-bower'),
    dirName = './static/assets';

//фильтры для сжатия файликов bower
var filterJs = gulpFilter(['**/*.js', '!**/*.min.js']),
    filterCss = gulpFilter('**/*.css');

//разбираемся со всем, что понаставил bower
gulp.task('bower', function() {
    return bower('./bower_components')
        //валится ошибка, пока не разобралась почему
        //.pipe(filterJs)
        //.pipe(uglify())
        //.pipe(filterJs.restore())
        .pipe(filterCss)
        .pipe(minCss({}))
        .pipe(filterCss.restore())
        .pipe(gulp.dest(dirName));
});
//жмем наши css
gulp.task('css', function() {
    gulp.src('./client/css/*.css')
        .pipe(minCss({keepBreaks:true}))
        .pipe(gulp.dest(dirName));
});
//наши js
gulp.task('js', function() {
    gulp.src('./client/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dirName));
});
//и html на последок
gulp.task('html', function() {
    gulp.src('./clients/*.html')
        .pipe(minHtml({}))
        .pipe(gulp.dest(dirName));
});
//запускаем всё это дело
gulp.task('default', ['bower', 'css', 'js', 'html']);
