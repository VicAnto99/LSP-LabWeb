import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import * as XLSX from 'xlsx';

declare var M: any;

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService, ProveedorService]
})
export class PeliculasComponent implements OnInit {

  fileName= 'Excel_Peliculas.xlsx';

  constructor(public peliculaService: PeliculaService, public proovedorService: ProveedorService) { }

  ngOnInit() {
    this.getPeliculas();
    this.getProveedores();
  }

  exportexcel(): void {  
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
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
  getProveedores(){
    this.proovedorService.getProveedores()
    .subscribe(res=>{
      this.proovedorService.proveedores = res as Proveedor[];
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
