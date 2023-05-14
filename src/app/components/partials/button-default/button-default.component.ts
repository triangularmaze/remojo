import { Component, Input } from '@angular/core';

@Component({
    selector: 'button-default',
    templateUrl: './button-default.component.html',
    styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent {
    @Input() link!: string;
    @Input() text!: string;
    @Input() icon!: boolean;
}
