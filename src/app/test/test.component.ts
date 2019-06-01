import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../providers/etudiant.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  etudiants: any = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiantService.liste().subscribe(
        (data: any)=>{
          this.etudiants = data.body;
        }
    )
  }

}

