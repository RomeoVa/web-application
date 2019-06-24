import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[tabla-clientes]',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit {

  @Input() cliente;

  constructor() { }

  ngOnInit() {
  }

}
