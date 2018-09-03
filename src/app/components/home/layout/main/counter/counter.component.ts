import { Component, OnInit } from '@angular/core';
declare var drawGauge: any;
import './counter.component.js';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
