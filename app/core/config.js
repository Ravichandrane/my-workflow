'use strict';

module.exports = function(
    $locationProvider,
    $routeProvider
) {

    createRouting();
    setRoutingOptions();

    function createRouting(){
        $routeProvider
            .when('/', {
                controller: 'homeCtrl',
                templateUrl: 'components/home/home.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    function setRoutingOptions() {
        $locationProvider.html5Mode({
            enabled: true
        });
    }

};