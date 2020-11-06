import { Injectable } from '@angular/core';
import { Note } from '../Model/Note';
import { Alumno } from '../Model/Alumno';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class NoteService {

  constructor( private http: HttpClient) { }

  private API_REST = 'https://backend-web-dj.herokuapp.com/api/v1/alumnos/?ordering=id';
  private API_REST_Meths = 'https://backend-web-dj.herokuapp.com/api/v1/alumnos/';


  //GET Request
  getAllAlumns(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.API_REST);
  }

  getOneAlumn(id: string): Observable<Alumno>{
    
    this.API_REST_Meths = `${this.API_REST_Meths}/${id}`;
    return this.http.get<Alumno>(this.API_REST_Meths);
  }

  //POST Request
  addNewAlumn(alumno:Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.API_REST_Meths,alumno);
  }

  //PUT Request: 
  editAlumn(alumno:Alumno, id): Observable<Alumno>{
    this.API_REST_Meths=`https://backend-web-dj.herokuapp.com/api/v1/format/alumnos/${id}/`;
    console.log(id , "----" , alumno , "----" , this.API_REST_Meths); 
    return this.http.put<Alumno>(this.API_REST_Meths,alumno);
  }

  //Delete Request:
  deleteAlumn(id): Observable<{}>{
    console.log(id);
    this.API_REST_Meths = `https://backend-web-dj.herokuapp.com/api/v1/format/alumnos/${id}/`;
    console.log(this.API_REST_Meths);
    return this.http.delete(this.API_REST_Meths);
  }






  getNotes(){}
  getOneNote(_id){}
  addNote(note : Note){}
  editNote(newNoteEdit){}
  deleteNote(_id){}


}
