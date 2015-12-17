angular.module("app", []);
angular.module("app").controller("TodoController", function($rootScope, $scope, TodoFactory) {
  $scope.todos = TodoFactory.todoList;
  
  $scope.addTodo = function(todo) {
    $rootScope.$broadcast('addNotification', "Dodan todo: " + todo)
    TodoFactory.addTodo(todo);
    $scope.t = "";
  }  
  $scope.removeTodo = function(index) {
    $rootScope.$broadcast('addNotification', "Odstranjen todo: " + TodoFactory.getTodoByIndex(index).name)
    TodoFactory.removeTodo(index);
  }  
  
});
angular.module("app").directive("todo", function() {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "templates/todo-template.html",
        controller: "TodoController"
    }
    
})
angular.module("app").factory("TodoFactory", function() {
  var todoList = [];
  return {
    todoList: todoList,
    addTodo: addTodo,
    removeTodo: removeTodo,
    getTodoByIndex: getTodoByIndex
  }
  
  function getTodoByIndex(index) {
    return todoList[index];
  }
  
  function addTodo(todo) {
    var t = {
      name: todo,
      status: "TODO"
    }
    todoList.push(t);
  }
  
  function removeTodo(index) {
    todoList.splice(index, 1);
  }
  
});