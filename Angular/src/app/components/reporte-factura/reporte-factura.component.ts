import { Component, OnInit } from '@angular/core';
import {FacturasService}  from '../../services/facturas.service';
import {Router, ActivatedRoute} from '@angular/router';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'reporte-factura',
  templateUrl: './reporte-factura.component.html',
  styleUrls: ['./reporte-factura.component.scss'],
  providers: [FacturasService]
})
export class ReporteFacturaComponent implements OnInit {

  facturas;
  facturas2;
  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(facturasService: FacturasService) {
    /*facturasService.getAllFacturas().subscribe((data: {}) => {
      console.log(data);
      this.facturas = data;
    });*/
    facturasService.getMyFacturas(this.rfc).subscribe((data: {}) => {
      console.log(data);
      this.facturas = data;
    });
  }

  ngOnInit() {
  }

}
