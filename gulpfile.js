var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

gulp.task('default',['script', 'scssConcat', 'style']);


gulp.task('script', function(){
   gulp.src('client/scripts/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('public/scripts')); 
});

gulp.task('scssConcat', function(){
   return gulp.src('client/styles/scss/*.scss')
            .pipe(concat('styles.scss'))
            .pipe(gulp.dest('client/styles')); 
});

gulp.task('style', function(){
    return sass('client/styles/styles.scss')
            .pipe(gulp.dest('public/styles'));
});