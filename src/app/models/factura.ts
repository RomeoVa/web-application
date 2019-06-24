export class Factura {

  constructor(
    public proveedor: string,
    public cliente: string,
    public direccion_proveedor: string,
    public direccion_cliente: string,
    public rfc_Cliente: string,
    public rfc_proveedor: string,
    public fecha: string,
    public concepto: Array<string>,
    public cantidad: Array<number>,
    public precio_unitario: Array<number>,
    public importe: Array<number>,
    public impuesto: number,
    public total: number,
    public firmaDigital: string,
    public selloDigital: string
  ) {  }
}
