import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DmcaService } from '../services/dmca.service';

@Component({
    selector: 'dmca-notice',
    templateUrl: './dmca-notice.component.html',
    styleUrls: ['./dmca-notice.component.css'],
    providers: [DmcaService]
})
export class DmcaNoticeComponent {

    @Input() chordName;
    @Output() closeNotice = new EventEmitter<void>();
    feedback: string;

    constructor(private dmcaService: DmcaService) {
    } //will get injected

    cancel() {
        this.closeNotice.emit();
    }

    submit(text) {
        this.dmcaService.createNotice(text, this.chordName).subscribe();
        this.feedback = "Notice Submited";
        setTimeout(() => { this.cancel(); }, 1000);

    }


}
