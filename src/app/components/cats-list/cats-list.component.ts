import { HttpParams } from '@angular/common/http';
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

  itemsPerPage = 8;
  currentPage = 0;
  totalItems: any;

  constructor(private catsService: CatsService) { }

  ngOnInit(): void { 
    this.getCatsList();
  }

  getHttpParams(itemsPerPage: number, currentPage: number, totalItems: number): HttpParams {
    let params = new HttpParams();

    params.append('limit', itemsPerPage);
    params.append('page', currentPage);
    params.append('count', totalItems);

    return params;
  }

  getCatsList() {
    const params = this.getHttpParams(this.itemsPerPage, this.currentPage, this.totalItems);
    
    this.catsService.getCats(params).subscribe(response => {
      this.cats = response;
      console.log(response);
    });
  }

  onPageChanged(event: any) {
    this.currentPage = event;
    this.getCatsList();
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }
 
}
