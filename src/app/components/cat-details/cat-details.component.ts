import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat;
  catImagePath: string;
  favCatsData$ = this.localStorageService.favCats$;
  favButtonText: string = 'Add to 💙';

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
    private localStorageService: LocalStorageService
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

  isInFavourites() {
    let favID = this.localStorageService.favArr.map(item => item.id);
    if (favID.includes(this.cat.id)) {
      this.favButtonText = 'Added To ❤️'
    }
  }
  
  AddToFavourites() {
    this.localStorageService.addFavItem('favourite-cats', this.cat);
    this.isInFavourites();

    console.log(localStorage);
  }

}
