import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CatsService } from 'src/app/services/cats.service';
import { Cats } from '../../components/cats';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat!: Cats;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catsService: CatsService,
  ) { }

  ngOnInit(): void {
    this.getSelectedCat();
  }
  
  getSelectedCat() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.catsService.getCat(id).subscribe(result => this.cat = result);
  }

  goBack() {
    this.location.back();
  }

}
