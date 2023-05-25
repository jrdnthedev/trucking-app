import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.closeEvent.emit(false);
  }
}
