import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI } from '../models/task.interface';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private collection: AngularFirestoreCollection<TaskI>;
  private todos: Observable<TaskI[]>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection('todos');
    this.todos = this.collection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      }
    ));
  }
  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.collection.doc<TaskI>(id).valueChanges();
  }

  updateTodo(todo: TaskI, id: string) {
    return this.collection.doc(id).update(todo);
  }

  addTodo(todo: TaskI) {
    return this.collection.add(todo);
  }

  removeTodo(id: string) {
    return this.collection.doc(id).delete();
  }
}
