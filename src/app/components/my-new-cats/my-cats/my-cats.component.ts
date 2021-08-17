import { Component, OnInit } from '@angular/core';
import { SaveDialogService } from 'src/app/services/save-dialog.service';
import { NewCatsCollectionService } from 'src/app/services/new-cats-collection.service';
import { NewCat } from 'src/app/models/new-cat-data';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { ConfirmDialogData } from 'src/app/models/confirm-modal-data';

@Component({
  selector: 'app-my-cats',
  templateUrl: './my-cats.component.html',
  styleUrls: ['./my-cats.component.scss']
})
export class MyCatsComponent implements OnInit {
  myCats: NewCat[];
  myCatsData$: Observable<NewCat[]>;
  displayedColumns: string[] = ['position', 'breed', 'origin', 'delete', 'edit', 'info'];
  uuidValue: string;

  constructor(
    private saveDialogService: SaveDialogService,
    private newCatsCollectionService: NewCatsCollectionService,
    private dialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.getMyCats();
    this.myCatsData$ = this.newCatsCollectionService.myCatsList$;
  }

  getMyCats(): void {
    this.myCats = this.newCatsCollectionService.getNewCats();
  }

  generateUUID(): string {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  openAddCatDialog(): void {
    const options: NewCat = {
      actionTitle: 'Add Cat',
      id: this.generateUUID(),
      name: '',
      temperament: '',
      weight: '',
      lifeSpan: '',
      origin: '',
      description: ''
    }

    this.saveDialogService.openDialog(options);
  }

  openDeleteNewCatDialog(event: Event, id: string): void {
    event.stopPropagation();
    const selectedNewCat = this.myCats.find(selectedCat => selectedCat.id === id);
    if (selectedNewCat === undefined) {
      return;
    }

    const options: ConfirmDialogData = {
      title: 'Removal Confirmation',
      description: `Are you sure you want to remove the following cat: ${selectedNewCat.name}?`,
      confirmButtonText: 'Delete Item',
      cancelButtonText: 'Cancel',
      confirmationCallback: (): void => {
        this.newCatsCollectionService.deleteNewCat(selectedNewCat.id);
      }
    }

    this.dialogService.openDialog(options);
  }


  openEditNewCatDialog(event: Event, catID: string) {
    event.stopPropagation();
    const selectedCat: NewCat = this.newCatsCollectionService.getNewCat(catID);

    const options: NewCat = {
      actionTitle: "Edit Cat",
      id: catID,
      name: selectedCat.name,
      temperament: selectedCat.temperament,
      weight: selectedCat.weight,
      lifeSpan: selectedCat.lifeSpan,
      origin: selectedCat.origin,
      description: selectedCat.description
    }

    this.saveDialogService.openDialog(options);
    }

  }
