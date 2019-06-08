import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
photo: any =[];
  constructor(public datas:DataserviceService, private route: ActivatedRoute, private router: Router) { }
url :string;
  ngOnInit() {
    this.datas.getPhoto(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.photo= data;
    });
  }

}
