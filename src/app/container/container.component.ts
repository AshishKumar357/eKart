import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product-list/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  imports: [
    SearchComponent,
    ProductComponent,
    CommonModule,
    ProductListComponent,
    ProductDetailComponent,
  ],
})
export class ContainerComponent {
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }

  @ViewChild(ProductListComponent) productList: ProductListComponent;
}
