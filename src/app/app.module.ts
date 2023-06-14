import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterQuesComponent } from './components/enter-ques/enter-ques.component';
import { AllQuesComponent } from './components/all-ques/all-ques.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DraftQuesService } from './services/draft-ques.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EnterQuesComponent,
    AllQuesComponent,
    
    DraftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DraftQuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
