import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products:Product[] = []
  displayedColumns = ['id','name','price'];
  constructor(private productService:ProdcutService) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products)=>{
    this.products = products;
    console.log(products);
    });
  }

}
