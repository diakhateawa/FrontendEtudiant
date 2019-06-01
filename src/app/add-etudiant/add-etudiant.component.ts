import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { EtudiantService } from "../providers/etudiant.service";
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  form: FormGroup
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form=new FormGroup({
      prenom: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ]))
     
    });
  }

  create(form){
    if(!form.valid){
      alert('Remplissez tous les champs ')
    }else{
      this.etudiantService.add(form.value).subscribe(
          (rep: any)=>{
            alert('Envoi avec succés')
            this.initForm();

          },
          error=>{
            alert("erreur lors de l'enregistrement")
            //console.log('error lors de l\'ajout ',error)
          }
      )
    }
  }
}
