(function () {
'use strict';

    /*********************** First Controller *************************/
    var app = angular.module('firstApp',[]);
    app.controller('firstCont',function ($scope) {
        $scope.name = "Santosh Poudel";

        $scope.sayHello = function () {
            return "Hello Angular"
        };
    });

    /*********************** Second Controller *************************/
    app.controller('nameCalculator',function ($scope) {
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.calcNumeric = function () {
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        }; 
        
        function calculateNumericForString(stringName) {
            var totalStringValue = 0;

            for (var i = 0; i < stringName.length; i++) {
                totalStringValue += stringName.charCodeAt(i);
            }

            return totalStringValue;
        }
    });

    /*********************** Third Controller *************************/
    /* $filter service is a service which lets us create a filter function that are used
     for formatting the data that gets displayed to user*/
    app.controller('dependencyInjection', DIController);
    function DIController($scope, $filter)
    {
        $scope.name = "Santosh";

        // This function is called in the HTML
        $scope.upper = function () {
            var upCase = $filter('uppercase'); //This will make the text in uppercase
            $scope.name = upCase($scope.name);
        };

        $scope.num = 1;

        $scope.selectNumber = function () {
            $scope.num = 2;
        };
    }

})();