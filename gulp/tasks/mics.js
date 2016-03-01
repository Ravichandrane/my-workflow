'use strict';

module.exports = function(gulp, $, config){

    gulp.task('image', function(){
        return gulp.src(config.image.src)
            .pipe($.plumber({
                errorHandler: config.errorHandler
            }))
            .pipe($.imagemin({
                optimizationLevel: 5,
                progressive: true,
                interlaced: true,
                svgoPlugins: [{
                    removeTitle: true,
                    removeViewBox: false
                }]
            }))
            .pipe($.size({
                title: 'Images Minify size :'
            }))
            .pipe(gulp.dest(config.base + config.image.folder));

    });

    gulp.task('fonts', function(){
        return gulp.src(config.fonts.src)
            .pipe($.plumber({
                errorHandler: config.errorHandler
            }))
            .pipe(gulp.dest(config.base + config.fonts.folder));
    });



};
