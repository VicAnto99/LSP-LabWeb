import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

declare var M: any;

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  constructor(public peliculaService: PeliculaService) { }

  ngOnInit() {
    this.getPeliculas();
  }

  addPelicula(form: NgForm){
    if(form.value._id){
      this.peliculaService.putPelicula(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({
          html: 'Pelicula modificada! :)'
        });
        this.getPeliculas();
      });
    }
    else{
      this.peliculaService.postPelicula(form.value)
      .subscribe(res=>{
      this.resetForm(form);
        M.toast({
          html: 'Pelicula creada! :)'
        });
        this.getPeliculas();
      });
    }
  }
  getPeliculas(){
    this.peliculaService.getPeliculas()
    .subscribe(res=>{
      this.peliculaService.peliculas = res as Pelicula[];
      console.log(res);
    });
  }
  editPelicula(pelicula: Pelicula){
    this.peliculaService.selectedPelicula = pelicula;
  }
  deletePelicula(_id: string){
    if(confirm('¿Estás seguro que quieres eliminarla?')){
      this.peliculaService.deletePelicula(_id)
        .subscribe(res=>{
          this.getPeliculas();
        M.toast({
          html: 'Pelicula eliminada correctamente!'
        });
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.peliculaService.selectedPelicula = new Pelicula();
    }
  }
}
