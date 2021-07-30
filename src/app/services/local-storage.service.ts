import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setStorage(key: string, data: {}): void {
    try {
      let favArr = [];

      if (key) {
        favArr = this.getStorage(key);
        favArr = [...favArr, data]
      } else {
        favArr = [data];
      }
      localStorage.setItem(key, JSON.stringify(favArr));
    } catch (err) {
      console.error('Error saving data to localStorage', err);
    }
  }

  getStorage(key: string) {
    try {
      if (key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
      } else {
        return [];
      }
    } catch (err) {
      console.error('Error getting data from localStorage', err);
      return null;
    }
  }

  removeFromStorage(key: string) {
    localStorage.removeItem(key);
  }

}
