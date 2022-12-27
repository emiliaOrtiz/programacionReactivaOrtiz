import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicioPruebaService } from 'src/app/servicios/servicio-prueba.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  title:string="Listado de Anime";

  constructor(public servicioBusqueda:ServicioPruebaService){
   //this.servicioBusqueda.buscador('saint seiya').subscribe(value=>value.data)
   this.servicioBusqueda.ngOnInit;

   this.servicioBusqueda.pokemones$
   .pipe(map(data=>console.log('pokemon: ',data)))
   .subscribe(data=>console.log('data:',data))
  
}
}
