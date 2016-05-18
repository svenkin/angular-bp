var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');

var config = require('./gulpfile.config');

gulp.task('web', function () {
    // place code for your default task here
    return runSequence(
        'clean', 
        ['bower', 'sass', 'node_modules', 'templatecache', 'fonts', 'main-js'],
        'index'
    )
});
gulp.task('default', function () {
    // place code for your default task here
    return runSequence(
        'web',
        'web:watch'
    )
});

gulp.task('web:watch', function () {
    gulp.watch(config.css.bower, ['bower-css']);
    gulp.watch("www/app/**/*.html", ['templatecache']);
    gulp.watch("www/app/**/*.scss", ['sass']);
    gulp.watch("www/app/**/*.js", ['main-js']);
});

gulp.task('bower', ['bower-js', 'bower-css']);
gulp.task('node_modules', ['nodemodules-js', 'nodemodules-css']);

gulp.task('bower-js', function () {
    return gulp.src(config.js.bower)
        .pipe(concat('bower.js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('bower-css', function () {
    return gulp.src(config.css.bower)
        .pipe(concat('bower.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('nodemodules-js', function () {
    return gulp.src(config.js.node_modules)
        .pipe(concat('node_modules.js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('nodemodules-css', function () {
    return gulp.src(config.css.node_modules)
        .pipe(concat('node_modules.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('main-js', function () {
    return gulp.src(config.js.app)
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('clean', function () {
    return gulp.src('./build', {
            read: false
        })
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src(config.sass)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        //    .pipe(cleanCSS())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('fonts', function () {
    return gulp.src(config.fonts)
        .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('templatecache', function () {
    return gulp.src(config.templatecache)
        .pipe(templateCache('templates.js', {
            module: 'app'
        }))
        .pipe(gulp.dest('./build/js/'));
})

gulp.task('index', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./build/'))
});