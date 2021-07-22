import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cat } from "../models/cat";
import { environment } from 'src/environments/environment';

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
  itemsPerPage = 8;
  page = 0;
  private url = `${environment.apiURL}/breeds?limit=${this.itemsPerPage}&page=${this.page}`;

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.url, httpOptions);
  }

  getCat(id: string): Observable<Cat> {
    const catURL = `${environment.apiURL}/images/search?breed_id=${id}`;
    return this.http.get<Cat>(catURL);
  }

}
