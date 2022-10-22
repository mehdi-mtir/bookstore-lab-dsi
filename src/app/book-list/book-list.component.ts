import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() titreAChercher : string = "";

  listBooks = [
    new Book(1, "The Slight Edge", "Jeff Olsen", "23.00"),
    new Book(2, "Atomic Habits", "James Clear", "18.00"),
    new Book(3, "So Good They Can't ignore you", "Cal Newport", "18.70")
  ]

  filteredListBooks() : Book[]{
    if(this.titreAChercher != ""){
      return this.listBooks.filter(
        book=>book.titre == this.titreAChercher
      )
    }
    else{
      return this.listBooks;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
