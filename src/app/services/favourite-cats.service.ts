import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cat } from '../models/cat';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteCatsService {
  private _localStorage: Storage;

  private keyName = 'favourite-cats';

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  private _favCats$ = new BehaviorSubject<Cat[]>([]); // The Bavior Subject is set to private to avoid random components altering the data flow and to ensure the data is changed only through the proper methods on the service

  get favCats$() {
    return this._favCats$.asObservable();
  } // to read the data, a public Observable is exposed

  addFavouriteCat(data: Cat) {
    let favArr = this.getFavouriteCats();

    let favItemID = favArr.map(item => item.id);
    if (favItemID.includes(data.id)) {
      return;
    }

    favArr = [...favArr, data]
   
    this.setFavouriteCats(favArr);
  }

  setFavouriteCats(data: Cat[]): void {
    this._localStorage.setItem(this.keyName, JSON.stringify(data));
    this._favCats$.next(data); // to create the data stream from the Observable by implementing the next() method
    // console.log('getStorage', this.favArr.length)
  }

  getFavouriteCats() {
    let catJson = this._localStorage.getItem(this.keyName);
    let favDataArr: Cat[] = catJson !== null ? JSON.parse(catJson): [];
    this.setFavouriteCats(favDataArr);
    // console.log('getStorage', JSON.parse(catJson || '').length)

    return favDataArr;
  }

  deleteFavouriteCat(id: string) {
    let favCats = this.getFavouriteCats();

    let catIndex = favCats.findIndex((favCat: any) => favCat.id === id);
    if (catIndex > -1) {
      favCats.splice(catIndex, 1)
    }

    this.setFavouriteCats(favCats);
  }

  deleteAllFavouriteCats() {
    this.setFavouriteCats([])
  }

}
