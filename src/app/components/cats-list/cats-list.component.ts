import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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

  constructor(private catsService: CatsService, private localStorageService: LocalStorageService) { }

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

  handleInputChange() {
    if (this.filteredCatsNames) {
      this.getFilteredCatsList()
    } else {
      this.getCatsList();
    }
  }

  onPageChanged(event: any) {
    this.currentPage = event;
    this.getCatsList();
  }

  onPageSizeChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.getCatsList();
  }

  AddToFavourites(event: Event) {
    event.stopPropagation();
    
    // this.localStorageService.setStorage('favourite-cats',);

    console.log('Added to Fav');

    console.log(localStorage);
  }
 
}
