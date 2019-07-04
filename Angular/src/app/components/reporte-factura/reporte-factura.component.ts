import { Component, OnInit } from '@angular/core';
import {FacturasService}  from '../../services/facturas.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'reporte-factura',
  templateUrl: './reporte-factura.component.html',
  styleUrls: ['./reporte-factura.component.scss'],
  providers: [FacturasService]
})
export class ReporteFacturaComponent implements OnInit {

  facturas;

  constructor(facturasService: FacturasService) {
    this.facturas= facturasService.getFacturas();
  }

  ngOnInit() {
  }

}
