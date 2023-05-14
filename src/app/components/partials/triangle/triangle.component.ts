import { Component, Input } from '@angular/core';

@Component({
    selector: 'triangle',
    templateUrl: './triangle.component.html',
    styleUrls: ['./triangle.component.scss'],
})
export class TriangleComponent {
    @Input() points!: String;
    @Input() fill!: String;
    @Input() height!: number;
    @Input() bottom?: boolean;
}
