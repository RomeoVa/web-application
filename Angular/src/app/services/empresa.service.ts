import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Empresa} from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  endpoint = 'http://localhost:3000/empresas';
	 httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json',

 	 })
	};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
  let body = res;
  return body || { };
  }

  updateEmpresa (rfc, empresa): Observable<any> {
    return this.http.patch(this.endpoint + '/' + rfc, JSON.stringify(empresa), this.httpOptions).pipe(
      tap(_ => console.log(`updated empresa`)),
      catchError(this.handleError<any>('updateEmpresa'))
    );
   }

   getEmpresaById(rfc): Observable<any>{
       return this.http.get(this.endpoint + '/' + rfc).pipe(
       map(this.extractData));
   }

   addEmpresa(empresa): Observable<any>{
    return this.http.post<any>(this.endpoint + '/', JSON.stringify(empresa), this.httpOptions).pipe(
      tap((empresa) => console.log(`added user`)),
      catchError(this.handleError<any>('addUser'))
    );
   }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
 }

}
