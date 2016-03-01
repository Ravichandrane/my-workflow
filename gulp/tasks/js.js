'use strict';

var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function(gulp, $, config){

    gulp.task('js', function(){
        return browserify(config.js.src)
               .bundle()
               .on('error', config.errorHandler)
               .pipe(source(config.js.destFile))
               .pipe(gulp.dest(config.base));
    });

};
