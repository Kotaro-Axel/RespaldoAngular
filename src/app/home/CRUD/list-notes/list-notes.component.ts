import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../Services/note.service';
import {Note} from '../Model/Note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  @Output() sendPositions = new EventEmitter();

  myNotes : Note[];

  constructor(private listServ : NoteService) { }

  ngOnInit(): void {
    this.myNotes = this.listServ.getNotes();
    console.log("Notes : " , this.myNotes );
  }

  getPositions(_id){
    this.sendPositions.emit(_id);
  }


  deleteNote(index){
    this.listServ.deleteNote(index);
  }

}
