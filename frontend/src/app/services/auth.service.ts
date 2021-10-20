import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient, public router: Router) { }

  registrar(user: any){
    return this.http.post<any>(this.URL+'/registrar', user);
  }

  ingresae(user: any){
    return this.http.post<any>(this.URL+'/ingresar', user);
  }

  loggedIn(){
    return !!(localStorage.getItem('token'));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.clear();
    return this.router.navigate(['/ingresar']);
  }

}
