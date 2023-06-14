import { Component, OnInit } from '@angular/core';
import { DraftQuesService } from 'src/app/services/draft-ques.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  draftQues:any = []

  constructor(private draftQuesService:DraftQuesService){}

  ngOnInit() {
    this.draftQuesService
    .getDraftQues()
    .subscribe(
      response => {
        this.draftQues = response
        // console.warn(response)
      },
      err => {
        console.error("Error occured!")
      }
    )
  }
}
