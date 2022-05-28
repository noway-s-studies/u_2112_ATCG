import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);

  }

  ngOnInit(): void {
  }

  onCreatedServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(ecent: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
