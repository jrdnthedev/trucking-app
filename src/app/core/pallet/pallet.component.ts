import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.scss']
})
export class PalletComponent implements OnInit {
  id = 0;
  size = '';

  constructor() { }

  ngOnInit(): void {
  }

  createPallet():void {

  }

  deletePallet(id: number): void {
  }
}
