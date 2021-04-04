import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent  {

  hayError:boolean=false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;
   termino:string = "hola mundo";
  constructor(private PaisService:PaisService) { 

  }


  buscar(termino:string) {
    this.termino= termino;
    this.hayError = false;

    this.PaisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises =  paises;
        console.log(paises);
      }, (err) => {
        this.hayError = true;
        this.paises = [];
     
      });
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino= termino;
    this.mostrarSugerencias=true;
    // crear el metodo sugerencias
    this.PaisService.buscarPais(termino).subscribe(paises =>{
      this.paisesSugeridos=paises.splice(0,5),
      (error) => this.paisesSugeridos= [];
    });
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  
  }
}
