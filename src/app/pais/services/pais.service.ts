import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }

  get getParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.getParams});

    //  .pipe(catchError(error => of([])));
      //Esto es algo para cuando no hay valores no es un error
      // es un arreglo vacio
    
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getParams});
  }

  getPaisById(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisesByRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.getParams});
  }

  

}
