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

  //https://backend-web-dj.herokuapp.com/         http://127.0.0.1:8000/
  private API_REST = 'http://54.237.111.188/api/v1/alumnos/?ordering=id';
  private API_REST_Meths = 'http://54.237.111.188/api/v1/alumnos/';


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
    this.API_REST_Meths=`http://54.237.111.188/api/v1/format/alumnos/${id}/`;
    return this.http.put<Alumno>(this.API_REST_Meths,alumno);
  }

  //Delete Request:
  deleteAlumn(id): Observable<{}>{
    this.API_REST_Meths = `http://54.237.111.188/api/v1/format/alumnos/${id}/`;
    return this.http.delete(this.API_REST_Meths);
  }

}
