import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProdcutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(Number(id)).subscribe((product) => {
      this.product = product;
    });
  }
  deleteProduct(): void {
    this.productService.delete(Number(this.product.id)).subscribe(()=>{
      this.productService.showMessage('Produto deletado com sucesso');
      this.router.navigate(["/products"]);
    })
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
