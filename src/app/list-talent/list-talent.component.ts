import { Component, OnInit } from '@angular/core';
import {TalentService} from "../providers/talent.service";

@Component({
  selector: 'app-list-talent',
  templateUrl: './list-talent.component.html',
  styleUrls: ['./list-talent.component.scss']
})
export class ListTalentComponent implements OnInit {

  talents:any = [];
  constructor(private talentService: TalentService) { }

  ngOnInit() {
    this.talentService.liste().subscribe(
        (data: any)=>{
          this.talents = data.body;
        }
    )
  }

  delete(id){
    this.talentService.delete(id).subscribe(
        (success)=>{
          this.talents.map((talent,index)=>{
            if(talent._id == id)
              this.talents.splice(index,1);
          })
        },error=>{
          alert('une erreur s\'est produite lors de la suppression');
          console.log(error);
        }
    )
  }

}
