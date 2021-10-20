import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { PerfilComponent } from '../components/perfil/perfil.component';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  selectedUser!: User;
  selectedID!: String;
  users!: User[];
  readonly URL_API = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
    this.selectedID = '';
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }
  getUserID(){
    return this.http.get(this.URL_API+"/perfil");
  }
  getUser(id:string){
    return this.http.get(this.URL_API+`/${id}`);
  }
  postUser(User: User){
    return this.http.post(this.URL_API, User);
  }
  putUser(user: User){
    return this.http.put(this.URL_API+`/${user._id}`, user);
  }
  deleteUser(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
