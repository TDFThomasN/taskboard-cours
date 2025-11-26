import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task } from '../core/services/task';

@Component({
  selector: 'app-home',
  imports: [ AsyncPipe ], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // tasks$!: ReturnType<Task['getTasks']>;

  // constructor(private taskService: Task) {
  //   this.tasks$ = this.taskService.getTasks();
  // }

  private cdr = inject(ChangeDetectorRef);

  count=0;
  intervalId=0;

  taskService = inject(Task);
  tasks$ = this.taskService.tasks$;

  addTask(title: string) {
    this.taskService.addTask(title);
  }

  ngOnInit() {
    console.log('ngOnInit executé');
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Compteur stoppé !');
  }
}
