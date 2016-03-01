'use strict';

//ANGULAR SETUP
var angular = require('angular');
var config  = require('./core/config');
var configDependencies = require('./core/dependencies');

//CREATE APP
var App = angular.module('App', configDependencies.dependencies);

//ANGULAR DEPENDENCIES
require('angular-route');

//ANGULAR CORE
App.constant('Config', configDependencies);
App.config(config);

//CONTROLLERS
App.controller('homeCtrl', require('./components/home/home.controller'));