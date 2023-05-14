import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/shared/models/Posting';

@Component({
    selector: 'posting-page',
    templateUrl: './posting-page.component.html',
    styleUrls: ['./posting-page.component.scss']
})
export class PostingPageComponent {
    posting!: Posting;

    constructor(activatedRoute: ActivatedRoute, postingService: PostingService) {
        activatedRoute.params.subscribe((params) => {
            if (params["id"]) {
                this.posting = postingService.getPostingById(params["id"]);
            }
        })
    }
}
