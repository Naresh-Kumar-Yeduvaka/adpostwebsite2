import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KumarService {

  constructor() { }
  pic1="/assets/image1.webp";
  pic2="/assets/image2.webp";
  pic3="/assets/image3.webp";
  pic4="/assets/image4.webp";
  pic5="/assets/image5.webp";
  pic6="/assets/image6.webp";
  pic7="/assets/image7.webp";
  pic8="/assets/image8.webp";
  itemlist={
    "item01":{image:this.pic1,id:"item01",price:"24,000",name:"iphone 8,64GB",date:"29-06-2019"},
    "item02":{image:this.pic2,id:"item02",price:"55,000",name:"honda shine bike",date:"12-08-2019"},
    "item03":{image:this.pic3,id:"item03",price:"2,40,000",name:"suziki desire",date:"24-09-2019"},
    "item04":{image:this.pic4,id:"item04",price:"7000",name:"Rolex Mens Watch",date:"06-06-2019"},
    "item05":{image:this.pic5,id:"item05",price:"8,00,000",name:"Thor Jeep Modified",date:"29-09-2019"},
    "item06":{image:this.pic6,id:"item06",price:"24,000",name:"Nikon 12D camera",date:"23-01-2019"},
    "item07":{image:this.pic7,id:"item07",price:"4000",name:"iphone wrist watch",date:"04-07-2019"},
    "item08":{image:this.pic8,id:"item08",price:"10000",name:"Real Tek Wodden Bed",date:"21-02-2019"},
  }
}
