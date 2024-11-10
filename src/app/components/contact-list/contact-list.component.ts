import { Component, OnInit } from '@angular/core';
import { ContactCardComponent } from "../contact-card/contact-card.component";
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactCardComponent, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAll();
  }
}
