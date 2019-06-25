import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.scss']
})
export class RegistroEmpresaComponent implements OnInit {
  hidden = false;
  Registering = true;

  constructor() { }
  @Output() HiddenEvent = new EventEmitter<boolean>();
  @Output() RegisteringEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  Hide(){
    this.hidden = false;
    this.HiddenEvent.emit(this.hidden);
  }

  Register(){
    this.Registering = false;
    this.RegisteringEvent.emit(this.Registering);
  }

}
