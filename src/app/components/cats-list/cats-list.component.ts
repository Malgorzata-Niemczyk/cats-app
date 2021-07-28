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
  filteredCats: Cat[] = [];
  filteredCatsNames: string = '';

  itemsPerPage = 8;
  itemsPerPageSizes = [3, 6, 9, 12];
  currentPage = 0;
  totalItems: number;

  constructor(private catsService: CatsService) { }

  ngOnInit(): void { 
    this.getCatsList();
  }

  getHttpParams(): HttpParams {
    let params = new HttpParams()
    .set('limit', this.itemsPerPage)
    .set('page', this.currentPage)
    .set('q', this.filteredCatsNames);

    console.log(params.toString());

    return params;
  }

  getCatsList() {
    const params = this.getHttpParams();
    
    this.catsService.getCats(params).subscribe((response) => {
      this.cats = response.cats;
      this.totalItems = response.totalItems;
      console.log(response.cats, response.totalItems);
    });
  }

  getFilteredCatsList() {
    const params = this.getHttpParams();
    
    this.catsService.getFilteredCats(params).subscribe((response) => {
      this.cats = response.cats;
      this.totalItems = response.totalItems;
      console.log(response.cats, response.totalItems);
    });
  }

  onPageChanged(event: any) {
    this.currentPage = event;
    this.getCatsList();
  }

  onPageSizeChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.getCatsList();
  }

  filterCats(searchValue: any): void {
    let searchTerm = searchValue.target.value;

    this.filteredCats = this.cats.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  AddToFavourites(event: Event) {
    event.stopPropagation();
    console.log('Add to Fav')
  }
 
}
