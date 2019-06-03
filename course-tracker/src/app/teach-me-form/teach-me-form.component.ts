import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teach-me-form',
  templateUrl: './teach-me-form.component.html',
  styleUrls: ['./teach-me-form.component.css']
})
export class TeachMeFormComponent implements OnInit {
  allowSearchInput = false;

  constructor() {
    // function to check if field is empty; if not empty button is clickable
   }

  ngOnInit() {
  }

  verifyText(event: any){
    if(Text.length == 0)
      return "Put some text in there!"
    else{
        this.allowSearchInput
    }
  }

  // onButtonClick() {
    
  
  // };
}
