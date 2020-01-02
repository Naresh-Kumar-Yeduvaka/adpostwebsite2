import { Component, OnInit } from '@angular/core';
import { KumarService } from 'src/app/kumar.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  constructor(private service2:KumarService) { }
  listarray=[]
  ngOnInit() {
    this.listarray=Object.values(this.service2.itemlist)
  }

}
