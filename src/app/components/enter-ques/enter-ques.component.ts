import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-enter-ques',
  templateUrl: './enter-ques.component.html',
  styleUrls: ['./enter-ques.component.css']
})
export class EnterQuesComponent {

  characterCount:number=500;

  updateRemainingCharacters(value:any){
      this.characterCount = 500 - value.length
  }

  addQuesForm= new FormGroup({
    newQues: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

}


