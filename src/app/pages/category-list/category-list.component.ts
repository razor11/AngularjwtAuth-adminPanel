import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categorieForm: FormGroup;
  isEdit: Boolean = false;
  categories;
  added: boolean = false;
  update: boolean = false;
  isLoading = true;

  constructor(private categorieService: CategoriesService) { }

  ngOnInit() {

    this.categorieService.getCategories().subscribe((response) => {
      this.categories = (response);
      this.isLoading = false;
    });

    this.added = false;
    this.update = false;
    this.categorieForm = new FormGroup({
      name: new FormControl('')
    });


  }

  addCategories() {
    if (this.categorieForm.valid) {
      this.categories.push(this.categorieForm.value);
      this.added = true;
      this.categorieForm.reset();
    }
  }

  editCategorie(i) {
    this.categorieForm = new FormGroup({
      name: new FormControl(this.categories[i].name)
    });

    this.update = true;

  }



  resetForm() {

    this.categorieForm.reset();
  }


}
