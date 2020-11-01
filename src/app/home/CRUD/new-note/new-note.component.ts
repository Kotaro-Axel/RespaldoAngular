import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(private listServ : NoteService) { }


  myId = 4;

  newNote = {
    id: this.myId,
    title: '',
    description: ''
  }

  ngOnInit(): void {
    console.log('Si funciono!!!!');  
  }

  addNote(){
    this.listServ.addNote(this.newNote);
    this.myId ++;
    this.newNote = {
      id:this.myId,
      title : '',
      description : ''
    }
  }

}
