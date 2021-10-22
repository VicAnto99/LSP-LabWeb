import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

declare var M: any;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
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
          html: 'Pelicula creada! :)'
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
          html: 'Pelicula eliminada correctamente!'
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

