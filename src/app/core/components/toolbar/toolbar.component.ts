import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tms-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

    @Input() loggedIn;

    constructor() { }

    ngOnInit(): void {
    }

}
