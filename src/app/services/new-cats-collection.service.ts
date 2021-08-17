import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewCat } from '../models/new-cat-data';
import { LocalStorageRefService } from './local-storage-ref.service';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class NewCatsCollectionService {
  private _localStorage: Storage;
  private myCatsKey = "my-cats";
  private _myCatsList$ = new BehaviorSubject<NewCat[]>([]);
  uuidValue: string;

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
   }

   get myCatsList$(): Observable<NewCat[]> {
      return this._myCatsList$.asObservable();
   }

  generateUUID(): string {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  addNewCat(myCat: NewCat): void {
    let myCatsArr = this.getNewCats();

    myCatsArr = [...myCatsArr, myCat];
    myCat.id = this.generateUUID();

    this.setNewCats(myCatsArr);
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

  getNewCat(id: string): NewCat {
    let newCat = this.getNewCats().find(newCat => newCat.id === id);
    return newCat!;
  }

  deleteNewCat(id: String): void {
    let newCats = this.getNewCats();
    let updatedCatsArr = newCats.filter((newCat: NewCat) => newCat.id !== id);

    this.setNewCats(updatedCatsArr);
  }

  updateNewCat(cat: NewCat): void {
    const existingMyCatsArr: NewCat[] = this.getNewCats();
    const index: number = existingMyCatsArr.findIndex((item: NewCat) => item.id === cat.id);
    
    existingMyCatsArr[index] = cat;

    this.setNewCats(existingMyCatsArr);
  }

}
