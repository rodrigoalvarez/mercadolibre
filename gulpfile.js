/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
	cleanCSS = require('gulp-clean-css');
	sass = require('gulp-sass');

/*
* Configuración de la tarea 'build'
*/
gulp.task('buildSASS', function () {
	return gulp.src('styles/source/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('styles/source'));
});

gulp.task('buildCSS', ['buildSASS'], function () {
	return gulp.src('styles/source/*.css')
		.pipe(concat('index.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('styles/'));
});

gulp.task('buildJS', function () {
	return gulp.src('scripts/source/*.js')
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('scripts/'));
});

gulp.task('build', ['buildJS', 'buildSASS', 'buildCSS']);