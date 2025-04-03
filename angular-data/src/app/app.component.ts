import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserItemComponent, HelloWorldComponent] // Importa i componenti
})
export class AppComponent {
  title = 'angular-data';
}
