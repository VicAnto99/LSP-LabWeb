import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pagos } from 'src/app/models/pagos';
import { ChidoPagosService } from 'src/app/services/chido-pagos.service';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Trabajo } from 'src/app/models/trabajo';
import { PagosService } from 'src/app/services/pagos.service';
import * as XLSX from 'xlsx';

declare var M: any;

@Component({
  selector: 'app-chido-pagos',
  templateUrl: './chido-pagos.component.html',
  styleUrls: ['./chido-pagos.component.css'],
  providers: [ChidoPagosService, ClienteService, PagosService]
})
export class ChidoPagosComponent implements OnInit {

  fileName= 'Excel_Pagos.xlsx';

  constructor(public pagosService: ChidoPagosService, public clienteService: ClienteService, public trabajo: PagosService) { }

  ngOnInit(): void {
    this.getClientes();
    this.getClientes2();
    this.getTrabajos();
  }

  exportexcel(): void {  
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
  getTrabajos(){
    this.trabajo.getTrabajos()
    .subscribe(res=>{
      this.trabajo.trabajos = res as Trabajo[];
      console.log(res);
    });
  }
  getClientes2(){
    this.clienteService.getClientes()
    .subscribe(res=>{
      this.clienteService.clientes = res as Cliente[];
      console.log(res);
    });
  }
  addCliente(form: NgForm){
    if(form.value._id){
      this.pagosService.putPago(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({
          html: 'Pago modificado! :)'
        });
        this.getClientes();
      });
    }
    else{
      this.pagosService.postPagos(form.value)
      .subscribe(res=>{
      this.resetForm(form);
        M.toast({
          html: 'Pago modificado! :)'
        });
        this.getClientes();
      });
    }
  }
  getClientes(){
    this.pagosService.getPagos()
    .subscribe(res=>{
      this.pagosService.pagos = res as Pagos[];
      console.log(res);

    });
  }
  editCliente(cliente: Pagos){
    this.pagosService.selectedPagos = cliente;
  }
  deleteCliente(_id: string){
    if(confirm('??Est??s seguro que quieres eliminarla?')){
      this.pagosService.deletePago(_id)
        .subscribe(res=>{
          this.getClientes();
        M.toast({
          html: 'Pago eliminado correctamente!'
        });
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.pagosService.selectedPagos = new Pagos();
    }
  }
}
