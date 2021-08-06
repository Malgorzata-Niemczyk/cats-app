import { Component, OnInit } from '@angular/core';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];
  displayedColumns: string[] = ['position', 'id', 'breed', 'origin', 'action'];
  favCatsData$ = this.favouriteCatsService.favCats$;

  constructor(private favouriteCatsService: FavouriteCatsService) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS(): void {
    this.favouriteCats = this.favouriteCatsService.getFavouriteCats();

    console.log(this.favouriteCats);
  }

  deleteFavCat(event: Event, id: string): void {
    event.stopPropagation();

    if (window.confirm('Are your sure you want to delete this record?')) {
      this.favouriteCatsService.deleteFavouriteCat(id);
    }
  }

  deleteAllFavourites(): void {
    if (window.confirm('Are your sure you want to delete all records?')) {
      this.favouriteCatsService.deleteAllFavouriteCats();
    }
  }
  
}
