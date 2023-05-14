import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    screenWidth: number = window.innerWidth;
    triangleHeight: number = 50;
    triangleContainerHeight: string = "50px";
    triangleBottom: boolean = true;

    // triangle above section 2
    pointsSection2: String = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;
    primary: String = "#CBD2C0";
    absolute: string = "absolute";

    // triangle above section 3
    accent: String = "#D81E5B";

    // adjust triangle point on window resize
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.screenWidth = event.target.innerWidth;

        // triangle above section 2
        this.pointsSection2 = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;
    }
}
