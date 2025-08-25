import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-base-filter',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './base-filter.component.html',
  styleUrl: './base-filter.component.css'
})
export class BaseFilterComponent {
  @Input() items: any[] = [];
  @Input() fieldName: string = '';
  @Output() filteredItems = new EventEmitter<any[]>();
  filtered: any[] = [];
  value = '';

  filterItems() {
    const searchValue = this.value.toLowerCase();
    this.filtered = this.items.filter(item =>
      item[this.fieldName]?.toLowerCase().includes(searchValue)
    );
    this.filteredItems.emit(this.filtered);
  }

  clearFilter() {
    this.value = '';
    this.filtered = this.items;
    this.filteredItems.emit(this.items);
  }
}
