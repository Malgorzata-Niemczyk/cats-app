import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from '../../../models/cat';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Cat[] = [];
  filteredCats: Cat[] = [];
  filteredCatsNames: string = '';

  selectedFavCat: Cat;

  itemsPerPageSizes = [4, 8, 12, 16, 20];
  itemsPerPage = this.itemsPerPageSizes[1];
  currentPage = 1;
  totalItems: number;

  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];

  constructor(
    private catsService: CatsService, 
    private favouriteCatsService: FavouriteCatsService
  ) { }

  ngOnInit(): void { 
    this.getCatsList();
  }

  getHttpParams(): HttpParams {
    let params = new HttpParams()
    .set('limit', this.itemsPerPage)
    .set('page', this.currentPage - 1)
    .set('q', this.filteredCatsNames);

    return params;
  }

  getCatsList(): void {
    const params = this.getHttpParams();
    
    this.catsService.getCats(params).subscribe((response) => {
      this.cats = response.cats;
      this.totalItems = response.totalItems;
    });
  }

  getFilteredCatsList(): void {
    const params = this.getHttpParams();
    
    this.catsService.getFilteredCats(params).subscribe((response) => {
      this.cats = response.cats;
      this.filteredCats = this.cats;
      
      this.totalItems = response.totalItems;
    });
  }

  fetchRequiredCatsList(): void {
    this.filteredCatsNames ? this.getFilteredCatsList() : this.getCatsList();
  }

  handleInputChange(): void {
    this.currentPage = 1;
    this.fetchRequiredCatsList();
  }

  onPageChanged(event: number): void {
    this.currentPage = event;
    this.fetchRequiredCatsList();
  }

  onPageSizeChange(event: Event): void {
    if (!event) {
      return;
    }
    
    this.itemsPerPage = Number((event.target as HTMLOptionElement).value);
    this.currentPage = 1;
    this.fetchRequiredCatsList();
  }

  addToFavourites(favCat: Cat): void {
    this.favouriteCatsService.addFavouriteCat(favCat);
  }

  removeFromFavourites(id: string): void {
    this.favouriteCatsService.deleteFavouriteCat(id);
  }

 
}
