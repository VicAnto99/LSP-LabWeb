import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagos = [];

  constructor(public pagosService: PagosService) { }

  ngOnInit() {
    this.pagosService.getPagos()
    .subscribe(res =>{
      console.log(res);
      this.pagos = res;
      console.log(this.pagos);
    }, err => console.log(err));
  }

}
