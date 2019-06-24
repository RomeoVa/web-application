import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor() { }

    getFacturas()
    {
    	return[{
        proveedor: "Fomento Económico Mexicano S.A.B. de C.V.",
        cliente: "Pedro",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 150,
        total: 1650,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	},{
        proveedor: "Fomento Económico Mexicano S.A.B. de C.V.",
        cliente: "Juan",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 230,
        total: 10200,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	},{
        proveedor: "Fomento Económico Mexicano S.A.B. de C.V.",
        cliente: "Maria",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 320,
        total: 5500,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	}

    	];
    }

    getMisFacturas(){
      return[{
        proveedor: "Walmart",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 150,
        total: 34756,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	},{
        proveedor: "Superama",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 230,
        total: 12300,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	},{
        proveedor: "ITESM",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 320,
        total: 22000,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn"
    	}

    	];

    }
}
