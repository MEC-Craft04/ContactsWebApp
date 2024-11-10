import { Component, Input } from '@angular/core';
import { contactGetAll } from '../../models/contactGetAll';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input()
  contact!: contactGetAll;
}
