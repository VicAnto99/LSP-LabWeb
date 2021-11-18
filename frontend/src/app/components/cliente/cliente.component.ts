import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import * as XLSX from 'xlsx';

declare var M: any;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  fileName= 'Excel_Clientes.xlsx';

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  exportexcel(): void {  
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  addCliente(form: NgForm){
    if(form.value._id){
      this.clienteService.putCliente(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({
          html: 'Cliente modificado! :)'
        });
        this.getClientes();
      });
    }
    else{
      this.clienteService.postCliente(form.value)
      .subscribe(res=>{
      this.resetForm(form);
        M.toast({
          html: 'Cliente modificado! :)'
        });
        this.getClientes();
      });
    }
  }
  getClientes(){
    this.clienteService.getClientes()
    .subscribe(res=>{
      this.clienteService.clientes = res as Cliente[];
      console.log(res);
    });
  }
  editCliente(cliente: Cliente){
    this.clienteService.selectedCliente = cliente;
  }
  deleteCliente(_id: string){
    if(confirm('¿Estás seguro que quieres eliminarla?')){
      this.clienteService.deleteCliente(_id)
        .subscribe(res=>{
          this.getClientes();
        M.toast({
          html: 'Cliente eliminado correctamente!'
        });
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.clienteService.selectedCliente = new Cliente();
    }
  }
}

