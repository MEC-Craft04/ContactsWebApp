import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  property: string | undefined;
  operator: string | undefined;
  value: string | undefined;

  constructor(private contactService: ContactService) { }

  applyFilter() {
    this.contactService.filter.filter(f => f.filterExpression(this.property!, this.operator!, this.value!));
    this.contactService.getAll();
  }
}
