import { Component, OnInit } from '@angular/core';
import { FavouriteCatsService } from 'src/app/services/favourite-cats.service';
import { Cat } from 'src/app/models/cat';
import { Observable } from 'rxjs';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { ConfirmDialogData } from 'src/app/models/confirm-modal-data';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'info'];
  favCatsData$: Observable<Cat[]>;

  constructor(
    private favouriteCatsService: FavouriteCatsService,
    private dialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.favouriteCatsService.getFavouriteCats();
    this.favCatsData$ = this.favouriteCatsService.favCats$;
  }

  openDeleteCatDialog(event: Event, id: string): void {
    event.stopPropagation();

    const options: ConfirmDialogData = {
      title: 'Removal Confirmation',
      description: `Are you sure you want to remove this cat?`,
      confirmButtonText: 'Delete Item',
      cancelButtonText: 'Cancel',
      confirmationCallback: (): void => {
        this.favouriteCatsService.deleteFavouriteCat(id);
      }
    }

    this.dialogService.openDialog(options);
  }

  openDeleteAllCatsDialog(): void {
    const options: ConfirmDialogData = {
      title: 'Removal Confirmation',
      description: `Are you sure you want to delete all your favourite cats?`,
      confirmButtonText: 'Delete All',
      cancelButtonText: 'Cancel',
      confirmationCallback: (): void => {
        this.favouriteCatsService.deleteAllFavouriteCats();
      }
    }

    this.dialogService.openDialog(options);
  }

}
