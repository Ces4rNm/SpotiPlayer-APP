import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  login: boolean = false;
  dataLogin = {
    user: null,
    password: null
  }
  config = {
    panel: null
  }
  videoSource: string;
  ngOnInit() {
    this.videoSource = './assets/video/video.mp4';
  }
  validate() {
    if (this.dataLogin.user == null || this.dataLogin.password == null) {
      alert('Ningun campo debe estar vacio');
    } else {
      if (this.dataLogin.user == 'cesar' && this.dataLogin.password == '123') {
        this.login = true;
      } else {
        alert('Usuario o contraseña incorrecta');
      }
    }
  }
  logout() {
    this.dataLogin = {
      user: null,
      password: null
    }
    this.login = false;
  }
  toggleConfig(vista) {
    this.config.panel = vista;
  }
}
