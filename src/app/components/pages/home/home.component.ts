import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    triangleContainerHeight: string = "50px";
    triangleBottom: boolean = true;

    // triangle above section 2
    primary: String = "#CBD2C0";
    absolute: string = "absolute";

    // triangle above section 3
    accent: String = "#D81E5B";
}
