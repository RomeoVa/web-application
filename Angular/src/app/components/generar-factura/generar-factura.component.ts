import { Component, OnInit } from '@angular/core';
import {Factura} from '../../models/factura';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'generar-factura',
  templateUrl: './generar-factura.component.html',
  styleUrls: ['./generar-factura.component.scss']
})
export class GenerarFacturaComponent implements OnInit {

  facturaModel:Factura;
  submitted = false;
  clientes =["Romeo","Jesús","Naji"];

  constructor(private router: Router) {

    this.facturaModel = new Factura();
  }

  onSubmit() {
    this.submitted = true;

  }

  ngOnInit() {
  }

}
