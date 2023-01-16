import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiPokemon: string = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<any>(this.apiPokemon);
  }
}
