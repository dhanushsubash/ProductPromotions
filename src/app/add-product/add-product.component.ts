import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productToAdd: Product;
  deleted: Product;
  productList: Product[];
  @ViewChild('frm') form: any;
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(prdList => this.productList = prdList);
  }

  remove(data) {
    console.log(data.id);
    this.service.removeProduct(data.id).subscribe(res => this.deleted = res);
    //location.reload();
    this.productList = this.productList.filter(function(item) {
      return item.name != data.name;
    });
  }

  submit(formData) {
    this.productToAdd = formData;
    console.log(this.productToAdd);
    this.service.addProduct(formData).subscribe(res => this.productList.push(res));
    this.form.reset();
  }

  
}
