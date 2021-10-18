import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

declare var M: any;

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    this.authService.ingresae(this.user)
    .subscribe(res =>{
      M.toast({
        html: '¡Bienvenido! :)'
      });
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/material']);
    }, err => {
      alert("Correo o Contraseña incorrecta, intenta de nuevo.");
      console.log(err)
    });
  }

}
