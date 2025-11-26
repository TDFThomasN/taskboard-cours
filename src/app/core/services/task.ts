import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks = [
    { id: 1, title: 'Préparer le cours Angular'},
    { id: 2, title: 'Réparer le cours Angular'},
    { id: 3, title: 'Parer le cours Angular'}
  ];

  getTasks() {
    return of(this.tasks).pipe(delay(1000));
  }

  private tasksSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    const newTask = { id: Date.now(), title };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }
}