import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setStorage(key: string, data: {}): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving data to localStorage', err);
    }
  }

  getStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (err) {
      console.error('Error getting data from localStorage', err);
      return null;
    }
  }

  removeFromStorage(key: string) {
    localStorage.removeItem(key);
  }
}