import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { ShowEtudiantComponent } from './show-etudiant/show-etudiant.component';
import { TestComponent } from './test/test.component';
import { EtudiantService } from './providers/etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowEtudiantComponent,
    AddEtudiantComponent,
    ListEtudiantComponent,
    EditEtudiantComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
