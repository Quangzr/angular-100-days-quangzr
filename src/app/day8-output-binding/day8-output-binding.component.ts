import { Component, OnInit } from '@angular/core';
import { Author, authorsData } from './authors';

@Component({
  selector: 'app-day8-output-binding',
  templateUrl: './day8-output-binding.component.html',
  styleUrls: ['./day8-output-binding.component.css'],
})
export class Day8OutputBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  authors = authorsData;

  selectedAuthor = authorsData[0];

  changeSelectedAuthor(selectedAuthorParam: Author) {
    this.selectedAuthor = selectedAuthorParam;
  }

  deleteAuthorInArray(deleteAuthorParamId: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== deleteAuthorParamId;
    });

    if (this.selectedAuthor.id === deleteAuthorParamId) {
      this.selectedAuthor = this.authors[0];
    }
  }
}
