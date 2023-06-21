import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { EnterQuesService } from 'src/app/services/enter-ques.service';

@Component({
  selector: 'app-enter-ques',
  templateUrl:'./enter-ques.component.html',
  styleUrls: ['./enter-ques.component.css']
})
export class EnterQuesComponent {
  constructor(private enterQuestionService:EnterQuesService){
    
  }

  characterCount:number=500;

  updateRemainingCharacters(value:any){
      this.characterCount = 500 - value.length
  }

  addQuesForm= new FormGroup({
    question: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  public submitquestion(addQuesForm:FormGroup){
    console.log(addQuesForm.value);
    this.enterQuestionService.submitquestion(addQuesForm.value).subscribe(
      (response:any) =>{
        console.log("Question is submitted");
        alert("Question submitted")
      },(error)=>{console.log(error)}
      
   
    )

  }

}


