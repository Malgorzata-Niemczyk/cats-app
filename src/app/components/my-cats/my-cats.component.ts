import { Component, OnInit } from '@angular/core';
import { SaveDialogService } from 'src/app/services/save-dialog.service';

@Component({
  selector: 'app-my-cats',
  templateUrl: './my-cats.component.html',
  styleUrls: ['./my-cats.component.scss']
})
export class MyCatsComponent implements OnInit {

  constructor(private saveDialogService: SaveDialogService) { }

  ngOnInit(): void {
  }

  openAddCatDialog() {
    const options = {
      id: 'ID',
      name: 'Name',
      temperament: 'Name',
      weight: 'Weight(kg)',
      life_span: 'Average life span',
      origin: 'Origin',
      description: 'Description'
    }
    
    this.saveDialogService.openDialog(options);
  } 

}
