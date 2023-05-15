import { Component, HostListener, Input } from '@angular/core';

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
    @Input() orientation!: String | "left" | "right";

    screenWidth: number = window.innerWidth;
    triangleHeight: number = 50;
    triangleContainerHeight: string = `${this.triangleHeight}px`;

    leftToRight: String = `0,0 ${this.screenWidth},0 0,${this.triangleHeight}`;
    rightToLeft: String = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;

    // adjust triangle point on window resize
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.screenWidth = event.target.innerWidth;

        // update points
        this.leftToRight = `0,0 ${this.screenWidth},0 0,${this.triangleHeight}`;
        this.rightToLeft = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;
    }
}
