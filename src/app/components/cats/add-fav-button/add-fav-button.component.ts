import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';

@Component({
  selector: 'app-add-fav-button',
  templateUrl: './add-fav-button.component.html',
  styleUrls: ['./add-fav-button.component.scss']
})
export class AddFavButtonComponent implements OnInit {
  @Input() cat: Cat;
  @Output() onAddToFavourites: EventEmitter<Cat> = new EventEmitter();
  @Output() onRemoveFromFavourites: EventEmitter<Cat> = new EventEmitter();

  toAddfavButtonText = '🖤';
  addedFavButtonTex = '❤️';

  constructor(private favouriteCatsService: FavouriteCatsService) { }

  ngOnInit(): void {
  }

  isCatInFavs(): boolean {
    return this.favouriteCatsService.isCatInFavourites(this.cat);
  }

  toggleFavs(): void {
    this.isCatInFavs()
     ? this.onRemoveFromFavourites.emit(this.cat)
     : this.onAddToFavourites.emit(this.cat);
  }

}
