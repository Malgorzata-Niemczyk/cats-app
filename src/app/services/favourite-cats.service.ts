import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cat } from '../models/cat';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteCatsService {
  private _localStorage: Storage;
  private keyName = 'favourite-cats';
  private _favCats$ = new BehaviorSubject<Cat[]>([]); // The Bavior Subject is set to private to avoid random components altering the data flow and to ensure the data is changed only through the proper methods on the service

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  get favCats$(): Observable<Cat[]> {
    return this._favCats$.asObservable();
  } // to read the data, a public Observable is exposed

  isCatInFavourites(cat: Cat): boolean {
    return this.getFavouriteCats().some(item => item.id === cat.id);
  }

  addFavouriteCat(cat: Cat): void {
    let favArr = this.getFavouriteCats();

    this.isCatInFavourites(cat);
    favArr = [...favArr, cat]
   
    this.setFavouriteCats(favArr);
  }

  setFavouriteCats(cats: Cat[]): void {
    this._localStorage.setItem(this.keyName, JSON.stringify(cats));
    this._favCats$.next(cats); // to create the data stream from the Observable by implementing the next() method
  }

  getFavouriteCats(): Cat[] {
    let catJson = this._localStorage.getItem(this.keyName);
    let favDataArr: Cat[] = catJson !== null ? JSON.parse(catJson): [];
    this.setFavouriteCats(favDataArr);

    return favDataArr;
  }

  deleteFavouriteCat(id: string): void {
    let favCats = this.getFavouriteCats();

    let catIndex = favCats.findIndex((favCat: Cat) => favCat.id === id);
    if (catIndex > -1) {
      favCats.splice(catIndex, 1)
    }

    this.setFavouriteCats(favCats);
  }

  deleteAllFavouriteCats(): void {
    this.setFavouriteCats([])
  }

}
