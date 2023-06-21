import { Component, Input, OnInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css'],

})
export class ReadmoreComponent implements OnInit {


  ngOnInit(): void {


  }


  myFunction() {
    console.log("myFunction");
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots!.style.display === "none") {
      dots!.style.display = "inline";
      btnText!.innerHTML = "Continue Reading";
      moreText!.style.display = "none";
    } else {
      dots!.style.display = "none";
      btnText!.innerHTML = "Read less";
      moreText!.style.display = "inline";
    }

  }
}
