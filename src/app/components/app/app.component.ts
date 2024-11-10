import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ContactsWebApp';
}
