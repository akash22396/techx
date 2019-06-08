import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = [];
  constructor(public datas: DataserviceService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.datas.getPhoto(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product= data;
    });
  }
  getProduct() {

  }

}
