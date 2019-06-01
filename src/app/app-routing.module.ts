import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';

const routes: Routes = [
  {path: '', component: ListEtudiantComponent},
  { path: 'etudiant/new', component: AddEtudiantComponent },
  { path: 'etudiant/:id/edit', component: EditEtudiantComponent },
  { path: 'etudiant', component: ListEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
