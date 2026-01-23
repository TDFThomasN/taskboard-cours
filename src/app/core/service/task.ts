import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import { delay } from 'rxjs/operators';

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Task {
  tasks = [
    { id: 1, title: 'Faire le ménage', completed: false },
    { id: 2, title: 'Faire les devoirs', completed: true },
    { id: 3, title: 'Faire les courses', completed: false },
  ];

  private TaskSubject = new BehaviorSubject<TaskItem[]>(this.tasks);

  getTasks() {
    // Retourne l'observable du BehaviorSubject pour que les abonnés reçoivent
    // automatiquement les mises à jour (add/delete) sans recréer un Observable froid.
    return this.TaskSubject.asObservable();
    // Si tu veux toujours simuler un délai au premier affichage, on peut utiliser:
    // return this.TaskSubject.asObservable().pipe(delay(500));
  }

  addTask(title: string) {
    const newTask : TaskItem = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    // this.tasks = [...this.tasks, newTask];
    this.TaskSubject.next(this.tasks);
  }

  // méthode pour supprimer une tâche par id
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.TaskSubject.next(this.tasks);
  }

}
