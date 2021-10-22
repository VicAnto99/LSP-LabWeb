import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trabajo } from 'src/app/models/trabajo';
import { PagosService } from 'src/app/services/pagos.service';

declare var M: any;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
  providers: [PagosService]
})
export class PagosComponent implements OnInit {

  constructor(public pagosService: PagosService) { }

  ngOnInit() {
    this.getTrabajos();
  }

  addPelicula(form: NgForm){
    if(form.value._id){
      this.pagosService.putTrabajo(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({
          html: 'Trabajo modificado! :)'
        });
        this.getTrabajos();
      });
    }
    else{
      this.pagosService.postTrabajo(form.value)
      .subscribe(res=>{
      this.resetForm(form);
        M.toast({
          html: 'Trabajo creado! :)'
        });
        this.getTrabajos();
      });
    }
  }
  getTrabajos(){
    this.pagosService.getTrabajos()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  editRrabajo(trabajo: Trabajo){
    this.pagosService.selectedTrabajo = trabajo;
  }
  deleteTrabajo(_id: string){
    if(confirm('¿Estás seguro que quieres eliminarla?')){
      this.pagosService.deleteTrabajo(_id)
        .subscribe(res=>{
          this.getTrabajos();
        M.toast({
          html: 'Trabajo eliminado correctamente!'
        });
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.pagosService.selectedTrabajo = new Trabajo();
    }
  }
}
