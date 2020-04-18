import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  produts;
  visible;
  formGroup: FormGroup;
  @ViewChild('searchbar') searchbar: ElementRef;
  constructor(public productService: ProductsService,
              public formBuilder: FormBuilder) { }
  searchText = '';
  toggleSearch: boolean = false;
  ngOnInit() {

    this.productService.getProducts().subscribe((response) => {
      this.produts = (response).reverse();
    });
    
    this.formGroup = this.formBuilder.group({
      isVisible: new FormControl('')
     
      
    });

    
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }


}
