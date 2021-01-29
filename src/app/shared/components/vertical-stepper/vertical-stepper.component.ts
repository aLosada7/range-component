import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lwa-vertical-stepper',
  templateUrl: './vertical-stepper.component.html'
})
export class VerticalStepperComponent implements OnInit {

    @Input() steps;
    @Input() actual;

  constructor() { }

  ngOnInit(): void {
  }

}
