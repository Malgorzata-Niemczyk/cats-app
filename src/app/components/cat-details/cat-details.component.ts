import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { breedDetails, SearchBreedResults } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: breedDetails;
  catImagePath: string;
  toAddfavButtonText = 'Add to 🖤';
  addedFavButtonText = 'Added To ❤️';

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
    
    this.catsService.getCat(id).subscribe((results: any) => {
      results.forEach((value: SearchBreedResults) => 
        value.breeds.forEach((item: breedDetails) => this.cat = item)
      );
      
      this.catImagePath = results.map((item: SearchBreedResults) => item.url);
    });
  }

  addToFavourites(): void {
    this.favouriteCatsService.addFavouriteCat(this.cat);
  }

  isInFavourites(): boolean {
    return this.favouriteCatsService.isCatInFavourites(this.cat);
  }

}
