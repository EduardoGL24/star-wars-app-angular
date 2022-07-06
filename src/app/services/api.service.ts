import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FilmsResponse, FilmsResults } from '../interfaces/films-response';
import { Starship, StarshipList, starshipsResponse } from '../interfaces/starships-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getFilms():Observable<FilmsResults[]>{
    return this.http.get<FilmsResponse>(`${this.baseURL}/films`).pipe(
      map(res => res.results)
    );
  };

  getStarships(idFilm: string):Observable<string[]>{
    return this.http.get<starshipsResponse>(`${this.baseURL}/films/${idFilm}`).pipe(
      map(res => res.starships)
    );
  };

  getStarshipToList(idStarship: string):Observable<StarshipList>{
    return this.http.get<Starship>(`${this.baseURL}/starships/${idStarship}`, {responseType: 'json'}).pipe(
      map(res => ({
        name: res.name,
        url: res.url.replace(/[^0-9]+/g, "")
      }))
    ); 
  };

  getStarship(idStarship: string):Observable<Starship>{
    return this.http.get<Starship>(`${this.baseURL}/starships/${idStarship}`, {responseType: 'json'})};

}
 