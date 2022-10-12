import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 product:Product = {
   name: '',
   price: 0
 }
  constructor(private productService: ProdcutService, private router:Router) { }

  ngOnInit(): void {
   
  }
  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Sucesso');
      this.router.navigate(['/products']);
    })
    
  }
  cancel():void{
   this.router.navigate(['/products'])
  }
 
 

}
