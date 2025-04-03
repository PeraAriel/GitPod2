
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';  // Assicurati che questa riga esista

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent  // Assicurati che UserListComponent sia aggiunto qui
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
