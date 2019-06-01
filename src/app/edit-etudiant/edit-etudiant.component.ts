import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { EtudiantService } from '../providers/etudiant.service';
@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  form: FormGroup;
  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiantService.get(this.route.snapshot.params.id).subscribe(
        (etudiant: any) => {
          this.initForm(etudiant.body);
        },error=>{

        }
    )

  }

  initForm(etudiant){
    this.form=new FormGroup({
      prenom: new FormControl(etudiant.prenom,Validators.compose([
        Validators.required,
      ])),
      nom: new FormControl(etudiant.nom, Validators.compose([
        Validators.required
      ])),

      adresse: new FormControl(etudiant.adresse,Validators.compose([
        Validators.required,
      ])),
     telephone: new FormControl(etudiant.telephone, Validators.compose([
        Validators.required
      ])),
     email: new FormControl(etudiant.email, Validators.compose([
        Validators.required
      ])),
     
    });
  }

  update(form){
    if(!form.valid){
      alert('Remplissez tous les champs ')
    }else{
      this.etudiantService.edit(this.route.snapshot.params.id,form.value).subscribe(
          (rep: any)=>{
            alert('Etudiant modifié avec succés')
            this.initForm(rep.body);

          },
          error=>{
            alert("erreur lors de l'enregistrement")
            console.log('error lors de l\'ajout ',error)
          }
      )
    }
  }
}

