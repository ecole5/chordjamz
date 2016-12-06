import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'public-control-bar',
  templateUrl: './public-control-bar.component.html',
  styleUrls: ['./public-control-bar.component.css']
})
export class PublicControlBarComponent {
  @Output() back = new EventEmitter<void>();
  @Output() openNotice = new EventEmitter<void>();




  clickBack() {
    this.back.emit();

  }

  clickReport() {
    this.openNotice.emit();

  }




}
