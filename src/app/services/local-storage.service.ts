import { Injectable } from '@angular/core';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public favArr: Cat[] = [];

  constructor() { }

  localStorage: Storage;

  hasKey(key: string): boolean {
    return key in localStorage;
  }

  addFavItem(key: string, data: Cat) {
    let favID = this.favArr.map(item => item.id);
    if (favID.includes(data.id)) {
      return;
    }

    if (this.hasKey(key)) {
      this.favArr = this.getStorage(key);
      this.favArr = [...this.favArr, data]
    } else {
      this.favArr = [data];
    }
    this.setStorage(key);
  }

  setStorage(key: string): void {
    localStorage.setItem(key, JSON.stringify(this.favArr));
    // console.log('getStorage', this.favArr.length)
  }

  getStorage(key: string) {
    let favArr = localStorage.getItem(key);
    // console.log('getStorage', JSON.parse(favArr || '').length)
    return favArr ? JSON.parse(favArr) : [];
  }

  deleteFavouriteCatFromLS(key: string, id: string) {
    let favCats = this.getStorage(key);

    let catIndex = favCats.findIndex((favCat: any) => favCat.id === id);
    if (catIndex > -1) {
      favCats.splice(catIndex, 1)
    }
    this.favArr = favCats;

    this.setStorage(key);
  }

  deleteAllItemsFromLS(key: string) {
    localStorage.removeItem(key);
  }

}
