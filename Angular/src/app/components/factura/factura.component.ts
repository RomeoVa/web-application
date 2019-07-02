import { Component, OnInit,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FacturasService}  from '../../services/facturas.service';
import {Factura} from '../../models/factura'

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  facturaModel;
  facturas;
  id:string;
  sub;


  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router, facturasService:FacturasService) {

                 this.sub=this._Activatedroute.paramMap.subscribe(params => {
		             console.log(params);
		             this.id = params.get('id');
		     	   });
		  		this.facturas = facturasService.getFacturas();

          for(var i = 0; i<this.facturas.length; i++) {
            if(this.facturas[i].id == this.id){
              this.facturaModel = this.facturas[i];
              break;

            }
          }

  }


  ngOnInit() {
  }

}
