import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    sizes: string[];
    colors: string[];
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
    discountedPrice?: number;
    isWishList: boolean;
  } = {
    id: 0,
    name: '',
    description: '',
    brand: '',
    gender: 'Unisex',
    category: '',
    sizes: [],
    colors: [],
    price: 0,
    is_in_inventory: false,
    items_left: 0,
    imageURL: '',
    slug: '',
    discountedPrice: 0,
    isWishList: false,
  };

  addToWishlist(product: { isWishList: boolean }) {
    product.isWishList = true;
  }
}
