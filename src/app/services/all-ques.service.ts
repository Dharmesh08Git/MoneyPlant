import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllQuesService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "http://localhost:9091";

  getAllQues(){
    return this.http.get(`${this.baseUrl}/question/getAllQuestion`);
  }
}
