import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-example',
  templateUrl: './for-example.component.html',
  styleUrls: ['./for-example.component.css']
})
export class ForExampleComponent implements OnInit {

  // employees: any[] = [
  //   {
  //     "name" : "Azhar Khan"
  //   },
  //   {
  //     "name" : "Rohit Kumar"
  //   },
  //   {
  //     "name" : "Shankar Yadav"
  //   }
  // ]

  employees: any[] = [
    {
      'department': 'Development',
      'employees_name': [
        {
          "name": "Azhar Khan"
        },
        {
          "name": "Rohit Kumar"
        },
        {
          "name": "Kishan Kumar"
        }
      ]
    },
    {
      'department': 'Testing',
      'employees_name': [
        {
          "name": "Neha Sharma"
        },
        {
          "name": "Shankar Yadav"
        }
      ]
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
