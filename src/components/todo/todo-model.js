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