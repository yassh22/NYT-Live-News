// Modules

const gulp = require('gulp')

const terser = require('gulp-terser'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
cssnano = require('gulp-cssnano'),
autoprefixer = require('gulp-autoprefixer'),
eslint = require('gulp-eslint'),
browserSync = require('browser-sync').create()

gulp.task('eslint', function(){
    return gulp
    .src('./js*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
 })

// Convert SASS to CSS, prefixes, and minifies to build dir.
gulp.task('sass', function(){
    return gulp
    // locates scss files
    .src('./sass/style.scss')
    // converts sass to css
    .pipe(sass())
    // adds prefixes for browser cpmpatibility
    .pipe(autoprefixer())
    // adds css to build dir
    .pipe(gulp.dest('./build/css'))
    // minifies our CSS
    .pipe(cssnano())
    // renames our CSS
    .pipe(rename('style.min.css'))
    // adds our final output to build dir
    .pipe(gulp.dest('./build/css'))
    // syncs browser whenever change is made (will add later)
    .pipe(browserSync.stream())
})

gulp.task('scripts', function(){
    return gulp
    .src('./js/*.js')
    .pipe(terser())
    .pipe(rename({ extname: 'main.js'}))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())

})

gulp.task('default', function(){

    browserSync.init({
        server: {
            baseDir:'./'
        }
    })

    gulp.watch('./js/*.js', gulp.series(['scripts', 'eslint'])).on('change', browserSync.reload)
    gulp.watch('./Sass/*.scss', gulp.series('sass')).on('change', browserSync.reload)
    gulp.watch('./*html').on('change', browserSync.reload)


})

