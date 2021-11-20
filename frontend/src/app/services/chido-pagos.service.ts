import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagos } from '../models/pagos';
import { ChidoPagosComponent } from '../components/chido-pagos/chido-pagos.component';

@Injectable({
  providedIn: 'root'
})
export class ChidoPagosService {

  selectedPagos!: Pagos;
  pagos!: Pagos[];
  readonly URL_API = 'http://localhost:3000/api/pagos';

  constructor(private http: HttpClient) {
    this.selectedPagos = new Pagos();
  }

  getPagos(){
    return this.http.get(this.URL_API);
  }
  postPagos(Pago: Pagos){
    return this.http.post(this.URL_API, Pago);
  }
  putPago(pago: Pagos){
    return this.http.put(this.URL_API+`/${pago._id}`, pago);
  }
  deletePago(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
