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

    triangleContainerHeight: string = "50px";
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
}
