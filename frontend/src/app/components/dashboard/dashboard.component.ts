import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PagosService]
})
export class DashboardComponent implements OnInit {

  constructor(public pagosService: PagosService) { }

  recibido!: string;
  maquilacion!: string;
  terminado!: string;
  enproceso!: string;
  entregado!: string;
  cancelado!: string;

  ngOnInit(): void {
    this.recibido = "";
    this.getRecibidoCount();
    this.maquilacion = "";
    this.getMaquilacionCount();
    this.terminado = "";
    this.getTerminadoCount();
    this.enproceso = "";
    this.getEnprocesoCount();
    this.entregado = "";
    this.getEntregadoCount();
    this.cancelado = "";
    this.getCanceladoCount();
  }
  getRecibidoCount(){
    this.pagosService.getRecibidoCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.recibido = res.toString();
      console.log(res);
    });
  }
  getMaquilacionCount(){
    this.pagosService.getMaquilacionCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.maquilacion = res.toString();
      console.log(res);
    });
  }
  getTerminadoCount(){
    this.pagosService.getTerminadoCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.terminado = res.toString();
      console.log(res);
    });
  }
  getEnprocesoCount(){
    this.pagosService.getEnprocesoCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.enproceso = res.toString();
      console.log(res);
    });
  }
  getEntregadoCount(){
    this.pagosService.getEntregadoCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.entregado = res.toString();
      console.log(res);
    });
  }
  getCanceladoCount(){ 
    this.pagosService.getCanceladoCount()
    .subscribe(res=>{
      this.pagosService.contador = res as string;
      this.cancelado = res.toString();
      console.log(res);
    });
  }
}
