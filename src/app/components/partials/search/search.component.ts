import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    searchTerm = "";
    @Input() include_clear: boolean = false;

    constructor(activatedRoute: ActivatedRoute, private router: Router) {
        activatedRoute.params.subscribe((params) => {
            if (params["searchTerm"]) {
                this.searchTerm = params["searchTerm"];
            }
        });
    }

    search(term: string): void {
        if (term) {
            this.router.navigateByUrl("/jobs/" + term);
        }
    }

    clear(): void {
        this.router.navigateByUrl("/jobs");
    }
}
