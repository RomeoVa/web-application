import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientesByEmpresa()
  {
    return[
      {
        rfc:"VCD2p4f3g",
        nombre:"Juan",
        apellido:"Pérez"

      },
      {
        rfc:"FCDf35g4t",
        nombre:"Maria",
        apellido:"Ortiz"

      },
      {
        rfc:"PLKncoejv3",
        nombre:"Jorge",
        apellido:"Vela"

      }

    ];

  }
}
