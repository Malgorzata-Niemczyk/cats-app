import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cat } from 'src/app/models/cat';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];
  displayedColumns: string[] = ['position', 'id', 'breed', 'origin', 'action'];
  favCatsData$ = this.localStorageService.favCats$;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS() {
    this.favouriteCats = this.localStorageService.getStorage(this.localStorageService.keyName);

    console.log(this.favouriteCats);

    console.log(this.favCatsData$)
  }

  deleteFavouriteCatFromLS(event: Event, id: string) {
    event.stopPropagation();

    if (window.confirm('Are your sure you want to delete this record?')) {
      this.localStorageService.deleteFavouriteCatFromLS(this.localStorageService.keyName, id);
    }
  }

  deleteAllFavourites() {
    if (window.confirm('Are your sure you want to delete all records?')) {
      this.localStorageService.deleteAllItemsFromLS(this.localStorageService.keyName);
    }
  }
  
}
