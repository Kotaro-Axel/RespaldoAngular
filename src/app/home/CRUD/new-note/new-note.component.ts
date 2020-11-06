import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(private listServ: NoteService) { }

  myId = 0;

  newAlumn = {
    id: null,
    school_controll: 1912,
    name: '',
    age: 18,
    email: '1912**@ids.upchiapas.edu.mx',
  }

  ngOnInit(): void {
    console.log('Si funciono!!!!');
  }

  addAlumn() {
    this.listServ.addNewAlumn(this.newAlumn).subscribe(data => console.log(data));
    this.newAlumn = {
      id: null,
      school_controll: 1912,
      name: '',
      age: 18,
      email: '1912**@ids.upchiapas.edu.mx',
    };
    //this.Refresh();
  }

  Refresh() {
    window.location.reload();
  }

}
