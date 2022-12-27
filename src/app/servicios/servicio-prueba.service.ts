import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, pipe } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  constructor( private http:HttpClient) { }

  public numeros$:Observable<Number>=interval(1000);

  public pokemones$:Observable<object>=this.http.get<object[]>('https://pokeapi.co/api/v2/pokemon')

  buscador(searchText: string):Observable<any>{
    return this.http.get('https://api.jikan.moe/v4/anime',{
      params:{
        q: searchText
      }
    })
    
    }
    ngOnInit(){
     
      this.pokemones$.subscribe(value=>(console.log('pokemon',value)));
      /*this.pokemones$
      .pipe(map(data=>console.log('data: ',data)))
      .subscribe(data=>console.log('data',data));*/
      
    }
    
    
}

