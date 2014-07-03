var firstApp = angular.module("firstApp", []);

firstApp.controller('menucontroller',function($scope){
    $scope.menus= [{item:'Home'},{item:'Products'},{item:'Contact Us'},{item:'About Us'}];
});

firstApp.controller('productcontroller',function($scope){
    $scope.Products=[
        {name:"Personal Computer",price:"25000",available:"100"},
        {name:"Laptop",price:"28000",available:"50"},
        {name:"Mouse",price:"250",available:"50"},
        {name:"Keyboard",price:"250",available:"40"},
        {name:"PC Cleaner",price:"150",available:"200"},
        {name:"Mouse Pad",price:"150",available:"230"},
        {name:"Motherboard",price:"3000",available:"50"},
        {name:"Lan card",price:"1000",available:"360"},
        {name:"Graphic card",price:"2500",available:"50"},
        {name:"RAM",price:"1100",available:"100"}
    ];
});

firstApp.directive("mouseon", function () {
    return function ($scope, element,attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.mouseon)
        });
    }
});
firstApp.directive("mouseoff", function () {
    return function ($scope, element,attrs) {
        element.bind("mouseleave", function () {
            element.removeClass(attrs.mouseon);
        });
    }
});
