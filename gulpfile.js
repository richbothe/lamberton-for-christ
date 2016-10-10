var gulp = require('gulp');

// Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// lint task
gulp.task('lint', function() {
	return  gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
// sass task
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
		//.pipe(rename('main.min.css'))
});

// concatenate & minify js
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// watch for changes
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint', 'scripts']);
	gulp.watch('src/scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);