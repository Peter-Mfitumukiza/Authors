import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
    selector:"authors",
    template:`
        <h2> {{authors.length}} Authors  </h2>
        <ul>
        <li *ngFor="let author of authors">  {{author}} </li>
        </ul>
    `
})
export  class AuthorsComponent{
    authors;
    constructor(service:AuthorsService){
        this.authors=service.getAuthors();
    }
}


