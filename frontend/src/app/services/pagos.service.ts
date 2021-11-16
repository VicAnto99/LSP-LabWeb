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
  contador!: string;

  private URL_API = 'http://localhost:3000/api/trabajos';

  constructor(private http: HttpClient) { 
    this.selectedTrabajo = new Trabajo();
  }

  getTrabajos(){
    return this.http.get(this.URL_API);
  }
  getRecibidoCount(){
    return this.http.get(this.URL_API+`/RecibidoCount`);
  }
  getRecibido(){
    return this.http.get(this.URL_API+`/Recibido`);
  }
  getMaquilacionCount(){
    return this.http.get(this.URL_API+`/MaquilacionCount`);
  }
  getMaquilacion(){
    return this.http.get(this.URL_API+`/Maquilacion`);
  }
  getTerminadoCount(){
    return this.http.get(this.URL_API+`/TerminadoCount`);
  }
  getTerminado(){
    return this.http.get(this.URL_API+`/Terminado`);
  }
  getEnprocesoCount(){
    return this.http.get(this.URL_API+`/EnprocesoCount`);
  }
  getEnproceso(){
    return this.http.get(this.URL_API+`/Enproceso`);
  }
  getEntregadoCount(){
    return this.http.get(this.URL_API+`/EntregadoCount`);
  }
  getEntregado(){
    return this.http.get(this.URL_API+`/Entregado`);
  }
  getCanceladoCount(){
    return this.http.get(this.URL_API+`/CanceladoCount`);
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
