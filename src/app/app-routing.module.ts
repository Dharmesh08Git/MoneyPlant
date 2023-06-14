import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuesComponent } from './components/all-ques/all-ques.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { EnterQuesComponent } from './components/enter-ques/enter-ques.component';

const routes: Routes = [
  {
    path:'drafts',component:DraftsComponent
  },
  {
    path:'allQuestions',component:AllQuesComponent
  },
  {
    path:'enterQuestions',component:EnterQuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
