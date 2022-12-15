import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() author: Author;
  @Output() selectedAuthor = new EventEmitter<Author>();
}
