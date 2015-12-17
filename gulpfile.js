var gulp = require("gulp");
var concat = require("gulp-concat");
var flatten = require("gulp-flatten");
var notify = require("gulp-notify");
var webserver = require("gulp-webserver");

gulp.task('serve', function() {
    gulp.src('./dist')
    .pipe(webserver({
        port: 8080,
        livereload: true
    }));
});

gulp.task('scripts', function() {
   gulp.src(['./src/app.js', './src/**/*.js'])
   .pipe(concat('app.js'))
   .pipe(gulp.dest('./dist/js'))
   .pipe(notify('JS compiled'));
});

gulp.task('move', function() {
   gulp.src(['./src/index.html'])
   .pipe(gulp.dest('./dist'))
   .pipe(notify('index.html moved'));
    
    gulp.src(['!./src/index.html', './src/**/*.html'])
    .pipe(flatten())
    .pipe(gulp.dest('./dist/templates'))
    .pipe(notify('Moved html templates'));
});

gulp.task('vendor', function() {
   gulp.src(['./bower_components/angular/angular.min.js',
             './bower_components/jquery/dist/jquery.min.js',
             './bower_components/bootstrap/dist/js/bootstrap.min.js'
            ])
   .pipe(concat('vendor.js'))
   .pipe(gulp.dest('./dist/js'))
   .pipe(notify('vendors js moved'));
});

gulp.task('style', function() {
   gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
   .pipe(concat('style.css'))
   .pipe(gulp.dest('./dist/css'))
   .pipe(notify('bootstrap style moved'));
});

gulp.task('watch', ['serve'], function() {
    gulp.start(['vendor', 'style', 'move', 'scripts']);
    gulp.watch(['./src/**/*.js'], ['scripts']);
    gulp.watch(['./src/**/*.html'], ['move']);
})