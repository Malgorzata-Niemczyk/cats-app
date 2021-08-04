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
  favCatsData$ = this.favouriteCatsService.favCats$;
  favButtonText: string = 'Add to ❤️';

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
    private favouriteCatsService: FavouriteCatsService
  ) { }

  ngOnInit(): void {
    this.getSelectedCat();
  }
  
  getSelectedCat() {
    const id: any = this.route.snapshot.paramMap.get('id');

    this.catsService.getCat(id).subscribe((results: any) => {
      for (let value of results) {
        for (let item of value.breeds) {
          this.cat = item;
        }
      };

      this.catImagePath = results.map((item: any) => item.url);
      
      console.log(this.cat);
    });
  }

  // isInFavourites() {
  //   let favItemID = this.favouriteCatsService.favArr.map((item: Cat) => item.id).includes(this.cat.id);
  //   return favItemID ?  this.favButtonText = 'Added To 🖤' :  this.favButtonText = 'Add To ❤️'
  // }
  
  AddToFavourites() {
    this.favouriteCatsService.addFavouriteCat(this.cat);
    // this.isInFavourites();

    console.log(localStorage);
  }

}
