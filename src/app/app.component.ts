import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodoService } from './services/todo.service';
import { ApiService } from './api.service';
import { Blog } from './interfaces/blog';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  todoList:Todo[] = [];

  blog:Blog | undefined;



  constructor(private todoService:TodoService, private apiService:ApiService){
  }

  ngOnInit(){
    this.getAllTodos();
    this.getApiResponse();
  }

  getAllTodos() : void {
    this.todoList = this.todoService.getAllTodos();
  }

  getApiResponse() : void {
    this.apiService.getItems()
        .subscribe({next: (res) => console.log(res),
                    error: (err) => console.log(err), 
                    complete: () => console.log()});
      
     
    //deprecated ( This is the old way of getting : response and error )
    // this.apiService.getItems()
    //     .subscribe(res => console.log(res), 
    //        error => console.log(error))
  }
}
