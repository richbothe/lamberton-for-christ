var gulp = require('gulp');

// Plugins
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Delete the dist directory
gulp.task('clean', function() {
	return gulp.src('dist')
		.pipe(clean());
});

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
    	//.pipe(sourcemaps.init())
    	//.pipe(sourcemaps.write())
    	.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

// concatenate & minify js
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});
//gulp.task('useref', function(){
//  return gulp.src('src/*.html')
//    .pipe(useref())
//    .pipe(gulp.dest('dist'))
//});

// copy fonts
gulp.task('fonts', function(){
	return gulp.src('src/fonts/**/*.{ttf,woff,eof,svg}')
		.pipe(gulp.dest('dist/fonts'))
});

// copy images
gulp.task('images', function() {
	return gulp.src('src/img/**/*.{png,jpg}')
		.pipe(gulp.dest('dist/img'))
});

// copy html
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

// watch for changes
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['lint', 'scripts']);
	gulp.watch('src/*.html', ['html']);
});

// Browser-sync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});


// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'fonts', 'images', 'html', 'browserSync', 'watch']);