/**
 * Created by jeff on 2017/3/20.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "./index.html"
        },
        port: 8765
    });
});

//压缩合并js和css并替换
gulp.task('useref', function(){
    return gulp.src(['src/index.html'])
        .pipe($.useref())
        .pipe($.if('*.js', $.babel({presets: ['es2015']}))) // Convert ES6 to ES5
        //.pipe($.if('*.js', $.uglify())) // Uglifies Javascript files
        .pipe($.if('*.css', $.less()))
        //.pipe($.if('*.css', $.cleanCss()))
        .pipe(gulp.dest('dist/'));
});

//清除dist目录
gulp.task('clean', function () {
    return del(['dist/*']);
});

gulp.task('watch', function () {
    gulp.watch(["src/**/*.js", 'src/**/*.css', 'src/**/*.less', 'src/**/*.html']).on('change', ()=>{
        runSequence('useref', browserSync.reload);
    });
});

// dev run
gulp.task('default', function (callback) {
    runSequence('clean', 'useref', 'browser-sync', 'watch', callback);
});