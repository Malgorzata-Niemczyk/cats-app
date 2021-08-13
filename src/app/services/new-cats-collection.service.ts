import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewCat } from '../models/save-modal-data';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class NewCatsCollectionService {
  private _localStorage: Storage;
  private myCatsKey = "my-cats";
  private _myCatsList$ = new BehaviorSubject<NewCat[]>([]);

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
   }

   get myCatsList$(): Observable<NewCat[]> {
      return this._myCatsList$.asObservable();
   }

  setNewCats(myCats: NewCat[]): void {
    this._localStorage.setItem(this.myCatsKey, JSON.stringify(myCats));
    this._myCatsList$.next(myCats);
  }

  getNewCats(): NewCat[] {
    let newCatJson = this._localStorage.getItem(this.myCatsKey);
    let myCatsArr: NewCat[] = newCatJson !== null ? JSON.parse(newCatJson) : [];
    this.setNewCats(myCatsArr);

    return myCatsArr;
  }

  addNewCat(myCat: NewCat): void {
    let myCatsArr = this.getNewCats();

    myCatsArr = [...myCatsArr, myCat];

    this.setNewCats(myCatsArr);
  }


}
