
/*#########################################
####   include gulp and plugins       #####
##########################################*/
const gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    replace = require('gulp-replace'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


/*#########################################
####          file location           #####
##########################################*/
const
    source = 'src/',
    dest = 'build/',
    
    css = {
        in: source + 'sass/styles.scss',
        watchFiles: source + 'sass/**/*',
        out: dest + 'css/',
        // sassOpts: {
        //     outputStyle: 'nested',
        //     errLogToConsole: true
        // }
    };



/*#########################################
####              tasks               #####
##########################################*/

//Sass task
function sassTask() {
    return gulp.src(css.in)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(css.out))
}

//watch task
function watch() {
    gulp.watch(css.watchFiles, sassTask); 
}


/*#########################################
####            export tasks          #####
##########################################*/

exports.sass = sassTask;



/*#########################################
####            default tasks          #####
##########################################*/

gulp.task('default', gulp.parallel(watch));