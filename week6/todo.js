export class Todo {
  constructor(content) {
    this.Id = Date.now();
    this.Content = content,
    this.Completed = 0;
  }
}
// //import {Todo} from './todo.js';
// let todo1 = new Todo("mow the lawn", false);
// console.log(todo1);

// toDoList = [toDo];