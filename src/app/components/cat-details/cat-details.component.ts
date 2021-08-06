import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat;
  catImagePath: string;
  toAddfavButtonText = 'Add to 🖤';
  addedFavButtonTex = 'Added To ❤️';

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
      results.map((value: Cat) => 
        value.breeds.map((item: Cat) => this.cat = item)
      );
      
      this.catImagePath = results.map((item: Cat) => item.url);
    });
  }

  AddToFavourites(): void {
    this.favouriteCatsService.addFavouriteCat(this.cat);
    // console.log(localStorage);
  }

  isInFavourites(): boolean {
    return this.favouriteCatsService.isCatInFavourites(this.cat);
  }

}
