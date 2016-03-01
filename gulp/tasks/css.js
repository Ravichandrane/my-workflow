'use strict';

module.exports = function(gulp, $, config){

    gulp.task('css', function(){

        return gulp.src(config.css.src)
            .pipe($.plumber({
                errorHandler: config.errorHandler
            }))
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.rename(config.css.destFile))
            .pipe($.size({
                title: 'CSS Minify size :'
            }))
            .pipe(gulp.dest(config.base + config.css.folder));

    });

};
