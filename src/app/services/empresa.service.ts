import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor() { }

  getEmpresaInfo(){
    return[{
      nombre:"FEMSA",
      razon_social:"Fomento Económico Mexicano S.A.B. de C.V.",
      rfc:"FSE920910CC6",
      correo:"femsa@servicios.com",
      contrasena:"mceoirnv"

     }];

  }
}
