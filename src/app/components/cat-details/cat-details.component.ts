import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { BreedDetails, SearchBreedResults } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: BreedDetails;
  catImagePath: string;
  toAddfavButtonText = '🖤';
  addedFavButtonText = '❤️';

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
    private favouriteCatsService: FavouriteCatsService
  ) { }

  ngOnInit(): void {
    this.getSelectedCat();
  }
  
  getSelectedCat(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    
    this.catsService.getCat(id).subscribe((results: SearchBreedResults[]) => {
      results.forEach((value: SearchBreedResults) => {
        value.breeds.forEach((item: BreedDetails) => this.cat = item);
        this.catImagePath = value.url;
      });
    });
  }

  isInFavourites(): boolean {
    return this.favouriteCatsService.isCatInFavourites(this.cat);
  }

  toggleFavourites(): void {
    this.isInFavourites() 
      ? this.favouriteCatsService.deleteFavouriteCat(this.cat.id)
      : this.favouriteCatsService.addFavouriteCat(this.cat);
  }

}
