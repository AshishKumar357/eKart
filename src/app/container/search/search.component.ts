import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchClicked(_t6: HTMLInputElement) {
    throw new Error('Method not implemented.');
  }
  searchText: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value;
    this.searchTextChange.emit(this.searchText);
  }
}
