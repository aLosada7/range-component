import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tms-user-data',
  templateUrl: './user-data.component.html'
})
export class UserDataComponent implements OnInit {

    @Input() signUpForm: FormGroup;
    @Input() matcher;

    constructor() { }

    ngOnInit(): void {
    }

}
