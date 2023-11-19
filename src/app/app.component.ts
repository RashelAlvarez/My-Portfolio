import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/js/bootstrap-icons/bootstrap-icons.css', 
  '../assets/js/boxicons/css/boxicons.min.css', '../assets/js/glightbox/css/glightbox.min.css',
  '../assets/js/swiper/swiper-bundle.min.css']
})
export class AppComponent {
  title = 'myportfoliov1';
  correo:FormGroup;

  constructor(private httpclient:HttpClient){
    this.correo=new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required ),
      message: new FormControl('', Validators.required)
    })
  }

  sendEmail(){
    Notiflix.Loading.standard('Cargando..');
    let params = {
      name:this.correo.value.name,
      email:this.correo.value.email,
      subject:this.correo.value.subject,
      message:this.correo.value.message
    }
    console.log(params);
    this.httpclient.post('http://localhost:3000/sendemail', params ).subscribe(resp=>{
      console.log(resp);
      Notiflix.Loading.remove();
      Notiflix.Notify.success('Enviado correctamente');
    });
  }
}



