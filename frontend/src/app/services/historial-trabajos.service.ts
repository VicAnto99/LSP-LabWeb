import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialTrabajos } from '../models/historial-trabajos';
import { PagosComponent } from '../components/pagos/pagos.component';

@Injectable({
  providedIn: 'root'
})
export class HistorialTrabajosService {

  selectedHistorial!: HistorialTrabajos;
  historial!: HistorialTrabajos[]

  private URL_API = 'http://localhost:3000/api/historial_trabajos';

  constructor(private http: HttpClient) { 
    this.selectedHistorial = new HistorialTrabajos();
  }
  getHistoriales(){
    return this.http.get(this.URL_API);
  }
  postHistorial(Trabajo: HistorialTrabajos){
    return this.http.post(this.URL_API, Trabajo);
  }
  getHistorial(Trabajo: HistorialTrabajos){
    return this.http.get(this.URL_API+`/${Trabajo._id}`);
  }
  putHistorial(trabajo: HistorialTrabajos){
    return this.http.put(this.URL_API+`/${trabajo._id}`, trabajo);
  }
  deleteHistorial(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }

}
