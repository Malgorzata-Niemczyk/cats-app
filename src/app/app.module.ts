import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouriteCatsComponent } from './components/favourite-cats/favourite-cats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatTileComponent } from './components/cat-tile/cat-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FavouriteCatsComponent,
    CatTileComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
