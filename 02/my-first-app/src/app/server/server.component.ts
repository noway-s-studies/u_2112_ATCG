import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['']
})
export class ServerComponent implements OnInit {

  i = 1;
  constructor() { }

  ngOnInit(): void {
    this.i++;
  }

}
