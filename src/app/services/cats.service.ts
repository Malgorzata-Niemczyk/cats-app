import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cats } from "../components/cats";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': 'd00783d4-6658-4e88-9b61-82ce0d180865',
  })
}

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  pageLimit = 8;
  private url = `https://api.thecatapi.com/v1/breeds`;

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cats[]> {
    return this.http.get<Cats[]>(this.url, httpOptions);
  }

  getCat(id: string): Observable<Cats> {
    const catURL = `${this.url}?breed_id=${id}`;
    return this.http.get<Cats>(catURL);
  }

}
