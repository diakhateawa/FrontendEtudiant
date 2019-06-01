import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  env: any = environment;
  constructor(private http: HttpClient) { }

  liste(){
    return this.http.get(this.env.BASE_URL+'/etudiants')
  }

  add(data){
    return this.http.post(this.env.BASE_URL+'/etudiants',data);
  }

  get(id){
    return this.http.get(this.env.BASE_URL+'/etudiants/'+id);
  }

  edit(id, body){
    return this.http.put(this.env.BASE_URL+'/etudiants/'+id, body);
  }

  delete(id){
    return this.http.delete(this.env.BASE_URL+'/etudiants/'+id);
  }
}
