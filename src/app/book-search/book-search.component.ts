import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchTerm : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  getSearch(f : NgForm){
    this.searchTerm = f.value.search.toLowerCase();
    console.log(this.searchTerm);
  }

}
