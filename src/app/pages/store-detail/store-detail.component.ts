import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  dataSource;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(this.route.snapshot.params['store']);
    console.log(this.dataSource);

  }

}
