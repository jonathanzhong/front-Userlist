/**
 * Created by yonglin1 on 8/18/15.
 */
app.controller('newUser', function($scope) {
    // When *Create New User* is clicked
    $scope.incomplete = true;
    $scope.createUser;

    $scope.fName = '';
    $scope.lName = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.passw1 = '';
    $scope.passw2 = '';


    $scope.$watch('passw1',function() {$scope.test();});
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});
    $scope.$watch('gender', function() {$scope.test();});
    $scope.$watch('age', function() {$scope.test();});

    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ( (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
});
