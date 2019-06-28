import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {

  hidden = false;

  constructor() { }
  @Output() HiddenEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  Hide(){
    this.hidden = true;
    this.HiddenEvent.emit(this.hidden);
  }

}
