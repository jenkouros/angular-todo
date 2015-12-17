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