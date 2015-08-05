var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jest = require('gulp-jest');

gulp.task('test', function () {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "../node_modules/gulp-jest/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testPathIgnorePatterns: [
            "node_modules"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

gulp.task('browserify', function() {
    gulp.src('src/client/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('app.js'))
      .pipe(gulp.dest('src/client/'));
});

gulp.task('copy', function() {
    gulp.src('src/server/public/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',[ 'test', 'browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
