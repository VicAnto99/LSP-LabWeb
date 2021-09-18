import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private URL = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getPagos(){
    return this.http.get<any>(this.URL+'/pagos');
  }
}
