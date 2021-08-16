import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cat, SearchBreedResults } from "../models/cat";
import { NewCat } from '../models/new-cat-data';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': '933cb9dc-2299-4e7d-8cfc-d5b5bdce8253',
  }),
  observe: 'response'
}

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  errorMessage: string;

  constructor(private http: HttpClient) { }

  getCats(params: HttpParams): Observable<{cats: Cat[], totalItems: number}> {
    const url = `${environment.apiURL}/breeds`;
    // @ts-ignore 
    return this.http.get<HttpResponse<Cat[]>>(url, {...httpOptions, params})
      .pipe(
        map((response: any) => ({cats: response.body, totalItems: response.headers.get('Pagination-Count')})),
      );
  }

  getFilteredCats(params: HttpParams): Observable<{cats: Cat[], totalItems: number}> {
    const queryURL = `${environment.apiURL}/breeds/search?`;
    // @ts-ignore 
    return this.http.get<HttpResponse<Cat[]>>(queryURL, {...httpOptions, params})
      .pipe(
        map((response: any) => ({cats: response.body, totalItems: response.headers.get('Pagination-Count')})),
      );
  }

  getCat(id: string): Observable<SearchBreedResults[]> {
    const catURL = `${environment.apiURL}/images/search?breed_id=${id}`;
    return this.http.get<SearchBreedResults[]>(catURL);
  }

  addCat(cat: NewCat): Observable<NewCat> {
    const url = `${environment.apiURL}/breeds`;
    // @ts-ignore 
    return this.http.post<Cat>(url, cat, httpOptions);
  }

}
