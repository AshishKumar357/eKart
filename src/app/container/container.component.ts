import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [SearchComponent, ProductComponent, CommonModule, ProductListComponent]
})
export class ContainerComponent {

}
