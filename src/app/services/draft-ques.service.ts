import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DraftQuesService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "http://localhost:9091";
  
  getDraftQues(){
    return this.http.get(`${this.baseUrl}/question/getAllDraftQuestion`);
  }
//   public savedraftquestion(addQuesForm:any){
//     return this.http.post(`${this.baseUrl}/question/getAllDraftQuestion`,addQuesForm);
//  }

}
