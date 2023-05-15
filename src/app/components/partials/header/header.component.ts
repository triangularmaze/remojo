import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    screenWidth: number = window.innerWidth;
    triangleHeight: number = 50;
    orientation: String = "left";
    primary: String = "#E6EED6";
}
