import { Component, OnInit } from '@angular/core';
import { AllQuesService } from 'src/app/services/all-ques.service';
import { DraftQuesService } from 'src/app/services/draft-ques.service';


@Component({
  selector: 'app-all-ques',
  templateUrl: './all-ques.component.html',
  styleUrls: ['./all-ques.component.css']
})
export class AllQuesComponent implements OnInit {
  
  allQues:any = []

  constructor(private allQuesService:AllQuesService){}
  ngOnInit() {
    this.allQuesService
    .getAllQues()
    .subscribe(
      response => {
        this.allQues = response
        // console.warn(response)
      },
      err => {
        console.error("Error occured!")
      }
    )
  }
 }


