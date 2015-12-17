angular.module("app").directive("todo", function() {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "templates/todo-template.html",
        controller: "TodoController"
    }
    
})