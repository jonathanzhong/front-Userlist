app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/view/userlist.html',
            controller: 'userCtrl'
        })
        .when('/newuser', {
            templateUrl: 'js/view/newuser.html',
            controller: 'newUser'
        })
        .when('/edituser/:id', {
            templateUrl: 'js/view/edituser.html',
            constroller: 'changeUser'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);