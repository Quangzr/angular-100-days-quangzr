import { Component, OnInit } from '@angular/core';
import { Author, authors } from './authors';

@Component({
  selector: 'app-day8-output-binding',
  templateUrl: './day8-output-binding.component.html',
  styleUrls: ['./day8-output-binding.component.css'],
})
export class Day8OutputBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  authors = authors;

  selectedAuthor = authors[0];

  changeSelectedAuthor(selectedAuthorParam: Author) {
    this.selectedAuthor = selectedAuthorParam;
  }
}
