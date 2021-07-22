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

  totalRecords!: number;
  pageSize:number = 8;
  page:number = 1;

  constructor(private catsService: CatsService) { }

  ngOnInit(): void { 
    this.getCatsList();
  }

  getCatsList() {
    this.catsService.getCats().subscribe(response => {
      this.cats = response;
      this.totalRecords = response.length;
      console.log(response);
    });
  }

  onPageChanged(event: any) {
    this.page = event;
    this.getCatsList();

  }

  onSelect(cat: Cats): void {
    this.selectedCat = cat;
    console.log(cat);
  }

}
