import { Component, OnInit } from '@angular/core';
import {Factura} from '../../models/factura'

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  facturaModel;
  arr:[];
  num:[];
  num2:[];
  num3:[];

  constructor() {
    this.facturaModel = new Factura(1,"Fomento Económico Mexicano S.A.B. de C.V.","Pedro","México","México","Afkgneòari","BVoejgno","12-03-18",this.arr,this.num,this.num2,this.num3,150,1650,"neijfbvnoejnbeo","ñeiubnroutbn","");
  }

  ngOnInit() {
  }

}
