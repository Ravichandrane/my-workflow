'use strict';

//Configuration
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./gulp/config');
var runSequence = require('run-sequence');
var reload = require('browser-sync').reload;
var tasklist = require('readdir').readSync(config.tasks, ['**.js']);

//Global
global.gulp = gulp;
global.$ = $;
global.config = config;
global.reload = reload;

// Tasks in "./gulp/tasks"
tasklist.forEach(function(tasklist) {
    require(config.tasks + tasklist)(gulp, $, config);
});

// Default task
gulp.task('default', function() {
    runSequence(
        'build',
        ['browserSync', 'watch']
    );
});

//SERVER TASKS
gulp.task('server', ['default']);

//WATCH TASK
gulp.task('watch', function() {
    gulp.watch(config.css.watch, ['css']);
    gulp.watch(config.html.watch, ['html', reload]);
});

// Build task
gulp.task('build', function() {
    runSequence(
        'clean',
        ['html', 'css', 'js', 'image', 'fonts']
    );
});
