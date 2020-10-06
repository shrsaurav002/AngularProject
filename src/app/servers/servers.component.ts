import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector:'app-servers',
 // for class=, selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No server was created!';
serverName='Test Server';
serverCreated=false;
servers=['TestServer','TestServer2']
 
constructor() {
  setTimeout(()=>{
  this.allowNewServer=true;
  }
  ,2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created! Name is '+ this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
