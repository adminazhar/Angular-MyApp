import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchexample',
  templateUrl: './switchexample.component.html',
  styleUrls: ['./switchexample.component.css']
})
export class SwitchexampleComponent implements OnInit {

  day = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
