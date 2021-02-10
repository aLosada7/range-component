import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tms-auth-options',
  templateUrl: './auth-options.component.html'
})
export class AuthOptionsComponent implements OnInit {

    @Input() active;

  constructor() { }

  ngOnInit(): void {
  }

}
