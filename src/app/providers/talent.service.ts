import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TalentService {
  env: any = environment;
  constructor(private http: HttpClient) { }

  liste(){
    return this.http.get(this.env.BASE_URL+'/talents')
  }

  add(data){
    return this.http.post(this.env.BASE_URL+'/talents',data);
  }

  get(id){
    return this.http.get(this.env.BASE_URL+'/talents/'+id);
  }

  edit(id, body){
    return this.http.put(this.env.BASE_URL+'/talents/'+id, body);
  }

  delete(id){
    return this.http.delete(this.env.BASE_URL+'/talents/'+id);
  }
}
