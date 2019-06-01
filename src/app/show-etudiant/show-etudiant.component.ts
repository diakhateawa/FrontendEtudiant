import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EtudiantService } from '../providers/etudiant.service';
@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {

  etudiant: any
  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit() {
    let idEtudiant = this.route.snapshot.params.id;
    this.etudiantService.get(idEtudiant).subscribe(
        (data: any) => {
            this.etudiant = data.body;
        },
        (error: any) => {
          alert("Erreur lors de la récupération du etudiant ")
          console.log(error);
        }
    )
  }

}

