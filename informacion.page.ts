import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import {TaskI} from '../models/task.interface';
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  todo: TaskI = {
    task: '',
    priority: 0,
    img: '',
    descripcion: '',
  };
  id: string; // Guarda el id del sitio


  constructor(private route: ActivatedRoute, private nav: NavController,
              private db: FirebaseService, private loadingController: LoadingController) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // poder usar el ID
    if (this.id) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.db.getTodo(this.id).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

}
