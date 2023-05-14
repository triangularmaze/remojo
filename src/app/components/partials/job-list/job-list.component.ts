import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/shared/models/Posting';

@Component({
    selector: 'job-list',
    templateUrl: './job-list.component.html',
    styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
    @Input() include_clear: boolean = false;
    @Input() homepage: boolean = false;
    @Input() icon: boolean = true;

    postings: Posting[] = [];

    constructor(private postingService: PostingService, activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe((params) => {
            if (params["searchTerm"]) {
                this.postings = this.postingService.getAllPostingsBySearchTerm(params["searchTerm"]);
            } else {
                this.postings = postingService.getAll();
            }
        });
    }
}
