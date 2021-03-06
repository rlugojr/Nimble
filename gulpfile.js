var gulp = require('gulp'),
	sass = require('gulp-sass');

require('shelljs/global');

gulp.task('sass', function() {
	gulp.src('src/css/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
	gulp.src('src/css/colours/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('src/css/colours'))
})

gulp.task('default', ['sass']);

// don't work too good
// gulp.task('produce', ['package', 'build']);

gulp.task('build', function() {
	// run this as a script because electron-builder doesn't offer it source
	var script = "node_modules/.bin/build --mac";
	exec(script);
});