import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
 
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300))
    
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
      console.log('debouncer',valor);
    });
  }
  //creamos un evento que pase el texto entre componentes
  // a lo eventos por best practice se le pone un Onevent.
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  termino: string= '';

  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  // se utiliza para recibir un parametro
  @Input() placeholder: string='';
  
  debouncer: Subject<string>= new Subject();

  buscar(){
    console.log("hola mundo");
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
