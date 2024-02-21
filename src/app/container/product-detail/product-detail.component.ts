import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent;

  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
