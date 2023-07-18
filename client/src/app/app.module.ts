import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';
// import { PartialsModule } from './partials/partials.module'; // if you export them from pages module, then don't need import here!!
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    // PartialsModule, // if you export them from pages module, then don't need import here!! (pages.module.ts)
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
