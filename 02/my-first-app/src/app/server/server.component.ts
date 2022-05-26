import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['']
})
export class ServerComponent {

  serverId = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

}
