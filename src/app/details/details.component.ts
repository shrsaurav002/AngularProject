import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  details=false;
  count=0;
  logClick=[];
  ngOnInit(): void {
  }
public toggleDisplay(){
  this.details=!this.details;
  this.count=this.count+1
  this.logClick.push(this.count);
  console.log(this.logClick.toString);
}
public getColor(){
  
    return this.count>4?'blue':'transparent'
  
}
}
