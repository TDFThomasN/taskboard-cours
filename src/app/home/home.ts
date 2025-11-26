import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task } from '../core/services/task';

@Component({
  selector: 'app-home',
  imports: [ AsyncPipe ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tasks$!: ReturnType<Task['getTasks']>;

  constructor(private taskService: Task) {
    this.tasks$ = this.taskService.getTasks();
  }

  count=0;

  ngOnInit() {
    console.log('ngOnInit executé');
    setInterval(() => {
      this.count++;
    }, 500);
  }
}
