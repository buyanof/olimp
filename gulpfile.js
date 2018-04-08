var gulp        = require('gulp'),
sass            = require('gulp-sass'),
autoprefixer    = require('gulp-autoprefixer'),
cleancss        = require('gulp-clean-css'),
rename          = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 version'],
        cascade: false
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
    gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass'])
});

gulp.task('default', ['watch']);