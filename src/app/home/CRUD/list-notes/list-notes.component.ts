import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../Services/note.service';
import {Note} from '../Model/Note';
import { Alumno } from '../Model/Alumno';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  @Output() sendPositions = new EventEmitter();

  alumns : Alumno[];
  
  myNotes : Note[];

  constructor(private listServ : NoteService) { }

  ngOnInit(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  render(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  getPositions(_id){
    this.sendPositions.emit(_id);
  }


  deleteNote(index):void{
    this.listServ.deleteAlumn(index).subscribe();
  }

}
