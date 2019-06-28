import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.scss']
})
export class RegistroEmpresaComponent implements OnInit {
  hidden = false;

  constructor() { }
  @Output() HiddenEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  Hide(){
    this.hidden = false;
    this.HiddenEvent.emit(this.hidden);
  }

}
