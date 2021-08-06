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
      for (let value of results) {
        for (let item of value.breeds) {
          this.cat = item;
        }
      };
      
      this.catImagePath = results.map((item: any) => item.url);

      this.favouriteCatsService.isCatInFavourites(this.cat);
      
      console.log(this.cat);
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
