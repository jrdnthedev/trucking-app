import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isOpenEvent = new EventEmitter<boolean>();
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.isOpen = ! this.isOpen;
    this.isOpenEvent.emit(this.isOpen);
  }
}
