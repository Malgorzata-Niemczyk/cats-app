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
  selectedCat?: Cats;

  constructor(private catsService: CatsService) { }

  ngOnInit(): void { 
    this.getCatsList();
  }

  getCatsList() {
    this.catsService.getCats().subscribe(response => {
      this.cats = response;
      console.log(response);
    });
  }

  onSelect(cat: Cats): void {
    this.selectedCat = cat;
    console.log(cat);
  }

}
