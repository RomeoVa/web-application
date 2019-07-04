import { Component, OnInit } from '@angular/core';
import {FacturasService}  from '../../services/facturas.service';

@Component({
  selector: 'reporte-factura',
  templateUrl: './reporte-factura.component.html',
  styleUrls: ['./reporte-factura.component.scss'],
  providers: [FacturasService]
})
export class ReporteFacturaComponent implements OnInit {

  facturas;
  facturas2;

  constructor(facturasService: FacturasService) {
    facturasService.getAllFacturas().subscribe((data: {}) => {
      console.log(data);
      this.facturas = data;
    });
    /*facturasService.getMyFacturas("Fbeio4bv").subscribe((data: {}) => {
      console.log(data);
      this.facturas2 = data;
    });*/
  }

  ngOnInit() {
  }

}
