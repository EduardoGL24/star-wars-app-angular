import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FilmsResponse, FilmsResults } from '../interfaces/films-response';
import { starshipsResponse } from '../interfaces/starships-response';

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
}
 