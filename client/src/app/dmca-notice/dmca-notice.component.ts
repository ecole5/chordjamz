import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dmca-notice',
  templateUrl: './dmca-notice.component.html',
  styleUrls: ['./dmca-notice.component.css']
})
export class DmcaNoticeComponent {



  @Input() chordName;
  @Output() closeNotice = new EventEmitter<void>();
  feedback:string;


  cancel(){
    this.closeNotice.emit();
  }

  submit(){
    this.feedback = "Notice Submited";
    setTimeout(() => { this.cancel(); }, 1000);
    
  }
 

}
