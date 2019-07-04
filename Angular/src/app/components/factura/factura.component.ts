import { Component, OnInit,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FacturasService}  from '../../services/facturas.service';
import {Factura} from '../../models/factura'
import {Concepto} from '../../models/concepto';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  facturaModel:Factura;
  conceptos: Concepto[];
  facturas;
  id:string;
  sub;


  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router, facturasService:FacturasService) {

                 this.sub=this._Activatedroute.paramMap.subscribe(params => {
		             console.log(params);
		             this.id = params.get('id');
		     	   });

             this.facturaModel = new Factura();
             this.conceptos = new Array();

             facturasService.getFacturaById(this.id).subscribe((data: {}) => {
               console.log(data);
               this.facturaModel = data;
               this.conceptos = this.facturaModel.concepto;
             });

  }


  ngOnInit() {
  }

}
