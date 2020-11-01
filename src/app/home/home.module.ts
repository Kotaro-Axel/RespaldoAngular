import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

//CRUD Components
import { NewNoteComponent} from './CRUD/new-note/new-note.component';
import { ListNotesComponent} from './CRUD/list-notes/list-notes.component';
import { NotesComponent} from './CRUD/notes/notes.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent, 
    NewNoteComponent,
    ListNotesComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
