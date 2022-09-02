import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Todo[] = [
    {task: 'Wash dishes', isFinished: false, priority: 1},
    {task: 'Sweep floor', isFinished: true, priority: 0},
    {task: 'Buy groceries', isFinished: true, priority: 1},
    {task: 'Do laundry', isFinished: false, priority: 0},
    {task: 'Rearrange furniture', isFinished: false, priority: 2},
    {task: 'Clean bedroom', isFinished: false, priority: 2}
  ];
  
  constructor() { }

  getAllTodos() : Todo[] {
    return this.taskList;
  }
}
