import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<boolean>();
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.closeEvent.emit(false);
  }
}
