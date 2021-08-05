import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-cat-tile',
  templateUrl: './cat-tile.component.html',
  styleUrls: ['./cat-tile.component.scss']
})
export class CatTileComponent implements OnInit {
  @Input() cat: Cat;
  @Output() onAddToFavourites: EventEmitter<Cat> = new EventEmitter();

  favButtonText: string = '🖤';

  constructor() { }

  ngOnInit(): void {
  }

  onAddToFav(cat: Cat, event: Event) {
    event.stopPropagation();
    this.onAddToFavourites.emit(cat);
    this.favButtonText = '❤️';
  }

}
