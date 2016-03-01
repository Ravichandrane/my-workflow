'use strict';

var $ = require('gulp-load-plugins')();

var config = {

    base : './tmp/',
    dist : './dist/',
    tasks: './gulp/tasks/',

    html : {
        watch: ['./app/**/*.jade'],
        src: ['./app/**/*.jade']
    },

    css : {
        watch: ['./app/assets/scss/**/*.scss'],
        src: ['./app/assets/scss/**/*.scss'],
        folder: './css',
        destFile : 'style.min.css'
    },

    js : {
        watch: ['./app/**/*.js'],
        src: ['./app/app.js'],
        destFile: 'app.min.js'
    },

    image: {
        watch: ['./app/assets/img/**/*'],
        src: ['./app/assets/img/**/*'],
        folder: './img'
    },

    fonts: {
        watch: ['./app/assets/fonts/**/*'],
        src: ['./app/assets/fonts/**/*'],
        folder: './fonts'
    },

    errorHandler: function(error){
        $.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })(error);
        this.emit('end');
    }

};

module.exports = config;
