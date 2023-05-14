import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/shared/models/Posting';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
    postings: Posting[] = [];

    screenWidth: number = window.innerWidth;
    triangleHeight: number = 50;
    triangleContainerHeight: string = "50px";
    points: String = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;
    primary: String = "#CBD2C0";
    position: string = "relative";
    bottom: String = "50px";

    constructor(private postingService: PostingService, activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe((params) => {
            if (params["searchTerm"]) {
                this.postings = this.postingService.getAllPostingsBySearchTerm(params["searchTerm"]);
            } else {
                this.postings = this.postingService.getAll();
            }
        });
    }

    // adjust triangle point on window resize
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.screenWidth = event.target.innerWidth;

        // triangle above section 2
        this.points = `0,${this.triangleHeight} ${this.screenWidth},0 ${this.screenWidth}, ${this.triangleHeight}`;
    }
}
