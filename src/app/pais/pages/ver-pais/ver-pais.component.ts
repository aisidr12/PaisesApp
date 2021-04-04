import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais:Country;  // la admiracion es un equivalente a indicar a js que confie en ti: puede ser nulo
  
  // viene con todo lo necesario para suscribirnos a cualquier cambio de la URL
  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {

   }

  ngOnInit(): void {
    
    this.activatedRoute
    .params
    .pipe(
      switchMap(({id}) =>   this.paisService.getPaisById(id) ),
      tap(console.log)  // tap recibe e imprime en consola
      ).subscribe( pais =>{
      console.log(pais);
      this.pais=pais;

    
    });

  }
  /*
    this.paisService.getPaisById(id)
       .subscribe(pais =>{
        console.log(pais);
      }
      ); */

}
