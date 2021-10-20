import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { PerfilService } from 'src/app/services/perfil.service';

declare var M: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [PerfilService]
})
export class PerfilComponent implements OnInit {

  constructor(public perfilService: PerfilService) { }

  user = {
    _id: '',
    email: '',
    password: '',
    name: '',
    last_name: '',
    mom_last_name: '',
    edad: '',
    numero_telefonico: ''
  }

  ngOnInit(): void {
    this.getUser();
    this.set_new_user(this.user!);
  }

  getUsers(){
    this.perfilService.getUsers()
    .subscribe(res =>{
      this.perfilService.users = res as User[];
      console.log(res);
    });
  }
  getUser(){
    let email = localStorage.getItem('email');
    const correo = document.getElementById("correo");
    correo!.textContent = email;

    let name = localStorage.getItem('name');
    let last_name = localStorage.getItem('last_name');
    let mom_last_name = localStorage.getItem('mom_last_name');
    const nombre = document.getElementById("nombre");
    nombre!.textContent = name + " " + last_name + " " + mom_last_name;
    
    let edad = localStorage.getItem('edad');
    const ed = document.getElementById("edad");
    ed!.textContent = edad;

    let numero_telefonico = localStorage.getItem('numero_telefonico');
    const num = document.getElementById("num");
    num!.textContent = numero_telefonico;
    
    let password = localStorage.getItem('password');
  }
  set_new_user(user: User){
    let id = localStorage.getItem('id');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let name = localStorage.getItem('name');
    let last_name = localStorage.getItem('last_name');
    let mom_last_name = localStorage.getItem('mom_last_name');
    let edad = localStorage.getItem('edad');
    let numero_telefonico = localStorage.getItem('numero_telefonico');
    user._id! = id!;
    user.email! = email!;
    user.password! = password!;
    user.name! = name!;
    user.last_name! = last_name!;
    user.mom_last_name! = mom_last_name!;
    user.edad! = edad!;
    user.numero_telefonico! = numero_telefonico!;

    const correo = document.getElementById("correo");
    correo!.textContent = email;

    const nombre = document.getElementById("nombre");
    nombre!.textContent = name + " " + last_name + " " + mom_last_name;
    
    const ed = document.getElementById("edad");
    ed!.textContent = edad;

    const num = document.getElementById("num");
    num!.textContent = numero_telefonico;

    return user;
  }
  editar(){
    console.log("Edit funciona");
    let user = this.set_new_user(this.user);
    this.perfilService.selectedUser = user;

    const info = document.getElementById("info");
    info!.style.display='none';
    const editar = document.getElementById("editar");
    editar!.style.display='block';

  }
  cancelar(){
    this.set_new_user(this.user!);
    const info = document.getElementById("info");
    info!.style.display='block';
    const editar = document.getElementById("editar");
    editar!.style.display='none';
  }
  con_editar(form: NgForm){
    console.log(form.value);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("mom_last_name");
    localStorage.removeItem("numero_telefonico");
    localStorage.removeItem("edad");
    localStorage.setItem("email", form.value.email!);
    localStorage.setItem("password", form.value.password!);
    localStorage.setItem("name", form.value.name!);
    localStorage.setItem("last_name", form.value.last_name!);
    localStorage.setItem("mom_last_name", form.value.mom_last_name!);
    localStorage.setItem("numero_telefonico", form.value.numero_telefonico!);
    localStorage.setItem("edad", form.value.edad!);
    this.perfilService.putUser(form.value)
    .subscribe(res=>{
      this.resetForm!(form);
      M.toast({
        html: 'Cuenta modificada! :)'
      });
      this.set_new_user(this.user!);
      const info = document.getElementById("info");
      info!.style.display='block';
      const editar = document.getElementById("editar");
      editar!.style.display='none';
    });
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.set_new_user(this.user!);
      this.perfilService.selectedUser = new User();
    }
  }
}
