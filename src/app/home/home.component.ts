import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos:any = [];

  constructor(public datas: DataserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photos = [];
    this.datas.getPhotos().subscribe((data: {}) => {
      console.log(data);
      this.photos = data;
    });
  }

/*
  Product: any[] = [{
    "fname" : "Akash",
    "lname" : "Singh"

  },{
    "fname" : "Lalit",
    "lname" : "Kumar"
  }]*/
  //constructor() { }



}
