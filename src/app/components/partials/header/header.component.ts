import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    screenWidth: number = window.innerWidth;
    triangleHeight: number = 50;

    // triangle below header
    pointsBelowHeader: String = `0,0 ${this.screenWidth},0 0,${this.triangleHeight}`;
    primary: String = "#E6EED6";

    // adjust triangle point on window resize
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.screenWidth = event.target.innerWidth;

        // triangle below header
        this.pointsBelowHeader = `0,0 ${this.screenWidth},0 0,${this.triangleHeight}`;
    }
}
