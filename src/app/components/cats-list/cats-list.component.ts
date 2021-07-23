import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Cat[] = [];
  searchTerm: string;
  responsivePagination: boolean = true;

  totalItems: number = 67;
  itemsPerPage:number = 8;
  currentPage:number = 0;

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

  onPageChanged(event: any) {
    this.currentPage = event + 1;
    this.getCatsList();
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }
 
}
