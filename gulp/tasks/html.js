'use strict';

module.exports = function(gulp,$,config) {
    gulp.task('html', function(){
        return gulp.src(config.html.src)
            .pipe($.plumber({
                errorHandler: config.errorHandler
            }))
            .pipe($.jade({
                pretty: true
            }))
            .pipe(gulp.dest(config.base));
    });
};