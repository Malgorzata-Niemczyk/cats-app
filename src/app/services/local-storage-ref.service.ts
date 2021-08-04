import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRefService {
  // create a getter that returns a function containing the localStorage object
  get localStorage(): Storage {
    return localStorage;
  }

  constructor() { }
}
