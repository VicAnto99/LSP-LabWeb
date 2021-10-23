import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajo } from '../models/trabajo';
import { PagosComponent } from '../components/pagos/pagos.component';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  selectedTrabajo!: Trabajo;
  trabajos!: Trabajo[]

  private URL_API = 'http://localhost:3000/api/trabajos';

  constructor(private http: HttpClient) { 
    this.selectedTrabajo = new Trabajo();
  }

  getTrabajos(){
    return this.http.get(this.URL_API);
  }
  getRecibido(){
    return this.http.get(this.URL_API+`/Recibido`);
  }
  getMaquilacion(){
    return this.http.get(this.URL_API+`/Maquilacion`);
  }
  getTerminado(){
    return this.http.get(this.URL_API+`/Terminado`);
  }
  getEnproceso(){
    return this.http.get(this.URL_API+`/Enproceso`);
  }
  getEntregado(){
    return this.http.get(this.URL_API+`/Entregado`);
  }
  getCancelado(){
    return this.http.get(this.URL_API+`/Cancelado`);
  }
  postTrabajo(Trabajo: Trabajo){
    return this.http.post(this.URL_API, Trabajo);
  }
  putTrabajo(trabajo: Trabajo){
    return this.http.put(this.URL_API+`/${trabajo._id}`, trabajo);
  }
  deleteTrabajo(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
