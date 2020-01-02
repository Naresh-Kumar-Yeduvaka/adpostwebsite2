import { Component, OnInit } from '@angular/core';
import { KumarService } from 'src/app/kumar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service1:KumarService) { }
  listarray=[]
  ngOnInit() {
    this.listarray=Object.values(this.service1.itemlist)
  }

}
