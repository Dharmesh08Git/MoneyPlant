import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnterQuesService {
 
  baseUrl="http://localhost:9091"

  constructor(private http:HttpClient) { }
  
  public submitquestion(addQuesForm:any){
     return this.http.post(`${this.baseUrl}/question/addQuestion`,addQuesForm);
  }
}
