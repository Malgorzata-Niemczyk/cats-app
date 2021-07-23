import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
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
  errorMessage: string;

  itemsPerPage = 8;
  currentPage = 0;
  private url = `${environment.apiURL}/breeds?limit=${this.itemsPerPage}&page=${this.currentPage}`;

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.url, httpOptions)
      .pipe(
        catchError(err => {
          if (err.error instanceof ErrorEvent) {
            this.errorMessage = `Error: ${err.error.message}`
          } else {
            this.errorMessage = this.getServerErrorMessage(err)
          }

          return throwError(this.errorMessage);
        })
      );
  }

  getCat(id: string): Observable<Cat> {
    const catURL = `${environment.apiURL}/breeds/${id}`;
    return this.http.get<Cat>(catURL);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch(error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`
      }
    }
  }

}
