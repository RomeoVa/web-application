import { Component, OnInit } from '@angular/core';
import {FacturasService}  from '../../services/facturas.service';

@Component({
  selector: 'misfacturas',
  templateUrl: './misfacturas.component.html',
  styleUrls: ['./misfacturas.component.scss'],
  providers: [FacturasService]
})
export class MisfacturasComponent implements OnInit {

  facturas;

  constructor(facturasService: FacturasService) {
    this.facturas= facturasService.getMisFacturas();
  }

  ngOnInit() {
  }

}
