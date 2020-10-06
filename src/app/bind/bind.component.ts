import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  username='';
   prop=false;
  constructor() { }

 
  testUsername(event:Event){
    const checkUsername=(<HTMLInputElement>event.target).value
    if (checkUsername.length!=0) {
    this.prop=true;
    }else{
      this.prop=false;
    }
   
      
    
  }
  resetUsername(){
    this.username='';
    this.prop=false;
  }
  ngOnInit(): void {
  }

}
