import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  @Input() id : number = 0;
  @Output() newBookAdded = new EventEmitter<Book>()

  constructor() { }

  ngOnInit(): void {
  }

  addBook(f : NgForm){
    //console.log(f);
    const newBook = new Book(f.value.id, f.value.titre, f.value.auteur, f.value.prix);
    console.log(newBook);
    this.newBookAdded.emit(newBook);
  }

}
