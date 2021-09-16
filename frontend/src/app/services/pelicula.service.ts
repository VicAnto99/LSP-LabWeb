import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';
import { PeliculasComponent } from '../components/peliculas/peliculas.component';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  selectedPelicula!: Pelicula;
  peliculas!: Pelicula[];
  readonly URL_API = 'http://localhost:3000/api/peliculas';

  constructor(private http: HttpClient) { 
    this.selectedPelicula = new Pelicula();
  }

  getPeliculas(){
    return this.http.get(this.URL_API);
  }
  postPelicula(Pelicula: Pelicula){
    return this.http.post(this.URL_API, Pelicula);
  }
  putPelicula(pelicula: Pelicula){
    return this.http.put(this.URL_API+`/${pelicula._id}`, pelicula);
  }
  deletePelicula(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
