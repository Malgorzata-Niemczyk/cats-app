import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS() {
    this.favouriteCats = this.localStorageService.getStorage('favourite-cats');

    console.log(this.favouriteCats);
  }

  deleteFavouriteCatFromLS(event: Event, id: string) {
    event.stopPropagation();

    const catIndex = this.favouriteCats.findIndex(favCat => favCat.id === id);
    if (catIndex > -1) {
      this.favouriteCats.splice(catIndex, 1);
    }

    this.localStorageService.setStorage('favourite-cats', this.favouriteCats);
  }

}
