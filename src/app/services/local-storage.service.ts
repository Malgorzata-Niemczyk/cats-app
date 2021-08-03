import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cat } from '../models/cat';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage: Storage;

  public favArr: Cat[] = [];
  public keyName = 'favourite-cats';

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  private _favCats$ = new BehaviorSubject<Cat[]>([]); // The Bavior Subject is set to private to avoid random components altering the data flow and to ensure the data is changed only through the proper methods on the service
  public favCats$ = this._favCats$.asObservable(); // to read the data, a public Observable is exposed

  hasKey(key = this.keyName): boolean {
    return key in localStorage;
  }

  addFavItem(key = this.keyName, data: Cat) {
    let favID = this.favArr.map(item => item.id);
    if (favID.includes(data.id)) {
      return;
    }

    if (this.hasKey(key = this.keyName)) {
      this.favArr = this.getStorage(key);
      this.favArr = [...this.favArr, data]
    } else {
      this.favArr = [data];
    }
    this.setStorage(key);
    this._favCats$.next(this.favArr); // to create the data stream from the Observable by implementing the next() method
  }

  setStorage(key = this.keyName): void {
    this._localStorage.setItem(key, JSON.stringify(this.favArr));
    // console.log('getStorage', this.favArr.length)
  }

  getStorage(key = this.keyName) {
    let catJson = this._localStorage.getItem(key);
    let favDataArr: Cat[] = catJson !== null ? JSON.parse(catJson): [];
    this._favCats$.next(favDataArr)
    // console.log('getStorage', JSON.parse(catJson || '').length)

    return favDataArr;
  }

  deleteFavouriteCatFromLS(key = this.keyName, id: string) {
    let favCats = this.getStorage(key);

    let catIndex = favCats.findIndex((favCat: any) => favCat.id === id);
    if (catIndex > -1) {
      favCats.splice(catIndex, 1)
    }
    this.favArr = favCats;

    this.setStorage(key);
    this._favCats$.next(this.favArr);
  }

  deleteAllItemsFromLS(key = this.keyName) {
    this._localStorage.removeItem(key);
    this._favCats$.next([]);
  }

}
