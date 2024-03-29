import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  selectedRadio: string = 'all';

  @Output()
  selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedRadioButtonChanged() {
    this.selectedRadioButtonChanged.emit(this.selectedRadio);
  }
}
