import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';

@Component({
  selector: 'app-cat-tile',
  templateUrl: './cat-tile.component.html',
  styleUrls: ['./cat-tile.component.scss']
})
export class CatTileComponent {
  @Input() cat: Cat;
  @Output() onAddToFavourites: EventEmitter<Cat> = new EventEmitter();

  toAddfavButtonText = '🖤';
  addedFavButtonTex = '❤️';

  constructor(private favouriteCatsService: FavouriteCatsService) { }

  onAddToFav(cat: Cat, event: Event): void {
    event.stopPropagation();
    this.onAddToFavourites.emit(cat);
  }

  onIsCatInFavs(): boolean {
    return this.favouriteCatsService.isCatInFavourites(this.cat);
  }

}
