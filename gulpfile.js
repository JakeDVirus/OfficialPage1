
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
    preprocess = require('gulp-preprocess'),
    htmlclean = require('gulp-htmlclean');


/*#########################################
####          file location           #####
##########################################*/
const
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),
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

    html = {
        in: source + '*.html',
        watchFiles: [source + '*.html', source + 'templates/**/*'],
        out: dest,
        context: {
            devBuild: devBuild
        }
    }



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

//html build files
function htmlBuild() {
    let page = gulp.src(html.in).pipe(preprocess({context: html.context}))
    if (!devBuild) {
        page = page.pipe(htmlclean());
    }
    return page.pipe(gulp.dest(html.out));
}

//watch task
function watch() {
    gulp.watch(css.watchFiles, sassTask); 
    gulp.watch(html.watchFiles, htmlBuild);
}

/*#########################################
####            export tasks          #####
##########################################*/

exports.sass = sassTask;
exports.html = htmlBuild;



/*#########################################
####            default tasks          #####
##########################################*/

gulp.task('default', gulp.parallel(watch));