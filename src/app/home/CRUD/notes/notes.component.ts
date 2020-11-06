import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private listServ: NoteService) { }


  identifier = 0;
  identifier2 = 0;

  replaceAlumn = {
    id: null,
    school_controll: 1912,
    name: '',
    age: 18,
    email: '',
  }


  ngOnInit(): void {
  }


  delete(id){
    this.listServ.deleteAlumn(id).subscribe();
  }

  editNote(id){
    this.listServ.editAlumn(this.replaceAlumn, this.identifier2).subscribe();
  }

}
