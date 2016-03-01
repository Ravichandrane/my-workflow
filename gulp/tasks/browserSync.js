'use strict';

var browserSync = require('browser-sync');

module.exports = function(gulp, $, config){

    gulp.task('browserSync', function(){

        return browserSync({
            notify: true,
            port: 3000,
            server: {
                baseDir: config.base
                /*middleware: [
                    modRewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ]),
                    function(request, response, next){
                        response.setHeader('Access-Control-Allow-Origin', '*');
                        next();
                    }
                ]*/
            }
        });

    });

};