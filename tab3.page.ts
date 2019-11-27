import { Component, OnInit } from '@angular/core';
// Importacion de la Camara
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// Importar DB y guardar info
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import {TaskI} from '../models/task.interface';
import {FirebaseService} from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  // myHora
  image: string;
  todo: TaskI = {
    task: '',
    priority: 0,
    img: '',
    descripcion: '',
  };
  descripcion: string;
  // incr = 0;
  constructor( private camera: Camera, private webView: WebView,
               private route: ActivatedRoute, private nav: NavController,
               private db: FirebaseService, private loadingController: LoadingController) {}
  ngOnInit() {

  }

  async guardar() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    if (this.todo.task === '') {
      loading.dismiss();

    } else {
      this.todo.id += 1;

      this.db.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.todo.task = '';
        this.todo.img = '';
        this.descripcion = '';

        this.nav.navigateForward('/tabs/tab2');
      });
    }
  }
  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA
  //   };
  //   this.camera.getPicture(options)
  //   .then((imageData) => {
  //     this.image = this.webView.convertFileSrc(imageData);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }


}
