import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouriteCatsComponent } from './components/favourite-cats/favourite-cats.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MyCatsComponent } from './components/my-cats/my-cats.component';
import { AddCatDialogComponent } from './components/add-cat-dialog/add-cat-dialog.component';
import { AddFavButtonComponent } from './components/add-fav-button/add-fav-button.component';
import { MyCatDetailsComponent } from './components/my-cat-details/my-cat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FavouriteCatsComponent,
    ConfirmDialogComponent,
    MyCatsComponent,
    AddCatDialogComponent,
    AddFavButtonComponent,
    MyCatDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
    AddCatDialogComponent
  ]
})
export class AppModule { }
