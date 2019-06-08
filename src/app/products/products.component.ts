import { Component, OnInit } from '@angular/core';

import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  constructor(private routes: ActivatedRoute, private router: Router, public datas: DataserviceService ) { }
// id: any;
// url:any;
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = [];
    this.datas.getEmpList().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

}
