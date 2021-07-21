import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { Cats } from '../cats';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Cats[] = [];

  constructor(private catsService: CatsService) { }

  ngOnInit(): void { 
    this.catsService.getCats().subscribe(cats => {
      this.cats = cats;
      console.log(cats)
    });
  }
}
