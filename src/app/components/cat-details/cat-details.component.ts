import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatsService } from 'src/app/services/cats.service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat;

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
  ) { }

  ngOnInit(): void {
    this.getSelectedCat();
  }
  
  getSelectedCat() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.catsService.getCat(id).subscribe(result => {
      this.cat = result;
      console.log(result);
    });
  }
}
