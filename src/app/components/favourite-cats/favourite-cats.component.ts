import { Component, OnInit } from '@angular/core';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from 'src/app/models/cat';
import { Observable } from 'rxjs';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  favouriteCats: Cat[];
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];
  favCatsData$: Observable<Cat[]> = this.favouriteCatsService.favCats$;

  constructor(
    private favouriteCatsService: FavouriteCatsService,
    private dialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.getFavouriteCatsFromLS();
  }

  getFavouriteCatsFromLS(): void {
    this.favouriteCats = this.favouriteCatsService.getFavouriteCats();
  }

  openDeleteCatDialog(event: Event, id: string): void {
    event.stopPropagation();
    const selectedFavCat = this.favouriteCats.find(selectedCat => selectedCat.id === id);
    if (selectedFavCat === undefined) {
      return;
    }

    const options = {
      name: 'deleteCat',
      title: 'Removal Confirmation',
      description: `Are you sure you want to remove the following cat: ${selectedFavCat.name}?`,
      confirmButtonText: 'Delete Item',
      cancelButtonText: 'Cancel',
      confirmationCallback: (): void => {
        this.favouriteCatsService.deleteFavouriteCat(selectedFavCat.id);
      }
    }

    this.dialogService.open(options);
  }

  openDeleteAllCatsDialog(): void {
    const options = {
      name: 'deleteAllCats',
      title: 'Removal Confirmation',
      description: `Are you sure you want to delete all your favourite cats?`,
      confirmButtonText: 'Delete All',
      cancelButtonText: 'Cancel',
      confirmationCallback: (): void => {
        this.favouriteCatsService.deleteAllFavouriteCats();
      }
    }

    this.dialogService.open(options);
  }

}
