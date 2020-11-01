import { Injectable } from '@angular/core';
import { Note } from '../Model/Note';


const NoteList = [
  {
    "id": 1,
    "title": "Shopping List",
    "description": "2 eggs, 1 Soda, 1kg Sugar"
  },
  {
    "id": 2,
    "title": "Home Work",
    "description": "Math, Programming, Design, English"
  },
  {
    "id": 3,
    "title": "Passwords",
    "description": "Mail Password: axel713281"
  }
]

@Injectable({
  providedIn: 'root'
})



export class NoteService {

  constructor() { }

  getNotes(){
    return NoteList;
  }

  getOneNote(_id){
    return NoteList.find(note => note.id === _id);
  }

  addNote(note : Note){
    NoteList.push(note);
  }

  editNote(newNoteEdit){
    const index = NoteList.findIndex(note => note.id === newNoteEdit);
    NoteList[index] = newNoteEdit;
  }

  deleteNote(_id){
    NoteList.splice(_id, 1);
  }


}
