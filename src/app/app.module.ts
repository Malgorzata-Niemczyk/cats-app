import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
