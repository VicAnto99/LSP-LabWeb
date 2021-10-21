import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor';
import { ProveedorComponent } from '../components/proveedor/proveedor.component';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  selectedProveedor!: Proveedor;
  proveedores!: Proveedor[];
  readonly URL_API = 'http://localhost:3000/api/proveedores';

  constructor(private http: HttpClient) { 
    this.selectedProveedor = new Proveedor();
  }

  getProveedores(){
    return this.http.get(this.URL_API);
  }
  postProveedor(Proveedor: Proveedor){
    return this.http.post(this.URL_API, Proveedor);
  }
  putProveedor(proveedor: Proveedor){
    return this.http.put(this.URL_API+`/${proveedor._id}`, proveedor);
  }
  deleteProveedor(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
