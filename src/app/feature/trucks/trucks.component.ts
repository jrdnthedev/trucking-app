import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {
  t_name: string = '';
  t_location: string = '';
  w_model: string = '';
  w_colour: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  createTruck(): void {

  }
}
