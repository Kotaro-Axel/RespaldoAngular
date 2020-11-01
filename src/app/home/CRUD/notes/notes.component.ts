import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private listServ: NoteService) { }


  myNote;
  noteFound;

  ngOnInit(): void {
  }

  getPositions($event){
    this.myNote = this.listServ.getOneNote($event);
    this.noteFound = this.myNote;
  }

  editNote(){
    this.listServ.editNote(this.noteFound);
  }

}
