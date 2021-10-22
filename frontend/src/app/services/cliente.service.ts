import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { ClienteComponent } from '../components/cliente/cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente!: Cliente;
  clientes!: Cliente[];
  readonly URL_API = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) {
    this.selectedCliente = new Cliente();
  }

  getClientes(){
    return this.http.get(this.URL_API);
  }
  postCliente(Cliente: Cliente){
    return this.http.post(this.URL_API, Cliente);
  }
  putCliente(cliente: Cliente){
    return this.http.put(this.URL_API+`/${cliente._id}`, cliente);
  }
  deleteCliente(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
