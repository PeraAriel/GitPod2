import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserItemComponent, HelloWorldComponent, UserListComponent] // Importa i componenti
})
export class AppComponent {
  title = 'angular-data';
}
