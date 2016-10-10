var gulp = require('gulp');

// Plugins
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// Delete the dist directory
//gulp.task('clean', function() {
//	return gulp.src('dist')
//		.pipe(clean());
//});

// lint task
gulp.task('lint', function() {
	return  gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// sass task
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
    	.pipe(sass())              // Sass-ify
    	.pipe(sourcemaps.init())   // Initializes sourcemaps
    	.pipe(sourcemaps.write())  // Writes sourcemaps into the CSS file
    	.pipe(gulp.dest('dist/css'));   // Where the assets are placed
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

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

// watch for changes
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint', 'scripts']);
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/*.html');
});

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'browser-sync', 'html', 'watch']);