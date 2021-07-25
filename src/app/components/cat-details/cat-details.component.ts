import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { selectedCat } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: selectedCat;
  catImagePath: string;

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
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
}
