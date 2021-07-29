import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouriteCatsComponent } from './components/favourite-cats/favourite-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FavouriteCatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
