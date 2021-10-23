import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trabajo } from 'src/app/models/trabajo';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css'],
  providers: [PagosService]
})
export class ProcesosComponent implements OnInit {

  constructor(public pagosService: PagosService) { }

  ngOnInit(): void {
    this.getTrabajos();
  }
  getTrabajos(){
    this.pagosService.getTrabajos()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getRecibido (){
    let div = document.getElementById("Recibido");

    this.pagosService.getRecibido()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getMaquilacion (){
    this.pagosService.getMaquilacion()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getTerminado(){
    this.pagosService.getTerminado()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getEnproceso(){
    this.pagosService.getEnproceso()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getEntregado(){
    this.pagosService.getEntregado()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getCancelado(){ 
    this.pagosService.getCancelado()
    .subscribe(res=>{
      this.pagosService.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  seleccion(){
    var e = (document.getElementById("men")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurValue = (<HTMLSelectElement><unknown>opt).value;
    if(CurValue === "Recibido"){
      this.getRecibido();
    }
    else if(CurValue === "Enproceso"){
      this.getEnproceso();
    }
    else if(CurValue === "Maquilación"){
      this.getMaquilacion();
    }
    else if(CurValue === "Terminado"){
      this.getTerminado();
    }
    else if(CurValue === "Entregado"){
      this.getEntregado();
    }
    else if(CurValue === "Cancelado"){
      this.getCancelado();
    }
    else if(CurValue === "General"){
      this.getTrabajos();
    }
  }
}
