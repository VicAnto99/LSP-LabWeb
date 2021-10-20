import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {


  user = {
    email: '',
    password: '',
    name: '',
    last_name: '',
    mom_last_name: '',
    edad: '',
    numero_telefonico: ''
  }

  constructor(private aunthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrate(){
    this.aunthService.registrar(this.user)
    .subscribe(res =>{
      M.toast({
        html: 'Cuenta creada. ¡Bienvenido! :)'
      });
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('id', res.id);
      localStorage.setItem('name', res.name);
      localStorage.setItem('last_name', res.last_name);
      localStorage.setItem('mom_last_name', res.mom_last_name);
      localStorage.setItem('edad', res.edad);
      localStorage.setItem('numero_telefonico', res.numero_telefonico);
      localStorage.setItem('password', res.password);
      localStorage.setItem('email', res.email);
      this.router.navigate(['/material']);
    }, err => {
      alert("Llena todos los campos");
      console.log(err)
    });
  }

}
