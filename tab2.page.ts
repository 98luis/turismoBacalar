import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import {FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  todo: TaskI[];
  // id = 11;
  constructor(private serviciosDB: FirebaseService, private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.serviciosDB.getTodos().subscribe(res => {
      // console.log('Tareas', res);
      this.todo = res;
    });
  }
  
  newPagina(id: string) {
    this.navCtrl.navigateForward(`informacion/${id}`);
  }
}
