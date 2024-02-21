import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchClicked(_t3: HTMLInputElement) {
    throw new Error('Method not implemented.');
  }
  searchText: string = '';

  // ngOnInit()
  //   this.searchText = event.target.value;
  // }

  // function searchClicked(){

  // }
}
