import { Injectable } from '@angular/core';
import { postings } from 'src/data';
import { Posting } from '../shared/models/Posting';

@Injectable({
    providedIn: "root"
})
export class PostingService {
    constructor() { }

    getAll(): Posting[] {
        return postings;
    }

    getAllPostingsBySearchTerm(searchTerm: string) {
        return this.getAll().filter(posting => posting.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    getPostingById(postingId: string) {
        return this.getAll().find(posting => posting.id == postingId) ?? new Posting(); // returns new Posting() if getAll() returns undefined
    }
}