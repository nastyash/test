
var testApp = angular.module('testApp', []);
//меняем текст по мере его ввода
var changeText = function($scope) {
    $scope.currentText = $scope.typedText;
};
testApp.controller('ShowFormCntrl', function($scope) {

    //массив с соединенными тегами
    $scope.tags  = [];
    /*= [
        {
            cssClass: 'red',
            tagValue: 'tt,tt,tt'
        },
        {
            cssClass: 'green',
            tagValue: 'tt1,tt1'
        },
        {
            cssClass: 'blue',
            tagValue: 'tt3,tt,3tt'
        }
    ];*/
    $scope.$watch('typedText', function(){changeText($scope);});
});
