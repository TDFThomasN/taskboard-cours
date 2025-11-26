import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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
}