import { Injectable } from '@angular/core';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRefService {
  // create a getter that returns a function containing the localStorage object
  get localStorage(): Storage {
    return getLocalStorage();
  }

  constructor() { }
}
