import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../providers/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

 etudiants:any = [];
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiantService.liste().subscribe(
        (data: any)=>{
          this.etudiants = data.body;
        }
    )
  }

  delete(id){
    this.etudiantService.delete(id).subscribe(
        (success)=>{
          this.etudiants.map((etudiant,index)=>{
            if(etudiant._id == id)
              this.etudiants.splice(index,1);
          })
        },error=>{
          alert('une erreur s\'est produite lors de la suppression');
          console.log(error);
        }
    )
  }

}
