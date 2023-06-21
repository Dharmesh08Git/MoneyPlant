import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { EnterQuesService } from 'src/app/services/enter-ques.service';

@Component({
  selector: 'app-enter-ques',
  templateUrl:'./enter-ques.component.html',
  styleUrls: ['./enter-ques.component.css']
})
export class EnterQuesComponent implements OnInit {
  constructor(private enterQuestionService:EnterQuesService, private route:ActivatedRoute){}

  ngOnInit() {
    this.enterQuestionService.getQuestiobById(parseInt(this.route.snapshot.params['id'])).subscribe(
      response => {
        this.addQuesForm.patchValue(response)
      }
    )
  }

  characterCount:number=500;

  updateRemainingCharacters(value:any){
      this.characterCount = 500 - value.length
  }

  addQuesForm= new FormGroup({
    questionId: new FormControl(0),
    question: new FormControl('', [Validators.required, Validators.minLength(5)]),
    draft: new FormControl(true)
  })


  public submitquestion(event:any){

    if(event.submitter.name == "draft"){
      this.addQuesForm.patchValue({draft: true})
      this.enterQuestionService.submitquestion(this.addQuesForm.value).subscribe(
        (response:any) =>{
          alert("Question is Drafted");
          this.addQuesForm.reset();
        },(error)=>{console.log(error)}
      )
    }else if(event.submitter.name == "save"){
      this.addQuesForm.patchValue({draft: false})
      this.enterQuestionService.submitquestion(this.addQuesForm.value).subscribe(
        (response:any) =>{
          console.log("Question is submitted");
        },(error)=>{console.log(error)}
      )
    }
    
  }
  openModel(){
    const modelDiv= document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='block';
    }
  }
  CloseModel(){
    const modelDiv= document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none';
    }
  }

}




