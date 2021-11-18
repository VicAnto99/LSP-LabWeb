import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import * as XLSX from 'xlsx';

declare var M: any;

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [ProveedorService]
})
export class ProveedorComponent implements OnInit {

  fileName= 'Excel_Proveedores.xlsx';

  constructor(public proovedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  exportexcel(): void {  
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  addProveedores(form: NgForm){
    if(form.value._id){
      this.proovedorService.putProveedor(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({
          html: 'Proveedor modificado! :)'
        });
        this.getProveedores();
      });
    }
    else{
      this.proovedorService.postProveedor(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({
          html: 'Proveedor creado! :)'
        });
        this.getProveedores();
      });
    }
  }
  getProveedores(){
    this.proovedorService.getProveedores()
    .subscribe(res=>{
      this.proovedorService.proveedores = res as Proveedor[];
      console.log(res);
    });
  }
  editProveedores(proveedor: Proveedor){
    this.proovedorService.selectedProveedor = proveedor;
  }
  deleteProveedor(_id: string){
    if(confirm('¿Estás seguro que quieres eliminarla?')){
      this.proovedorService.deleteProveedor(_id)
      .subscribe(res=>{
        this.getProveedores();
        M.toast({
          html: '¡Proveedor eliminado correctamente!'
        });
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.proovedorService.selectedProveedor = new Proveedor();
    }
  }
}
