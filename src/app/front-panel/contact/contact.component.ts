import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup
  constructor(fb:FormBuilder) {
    this.contactForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      message:['',Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.contactForm.controls[controlName]?.hasError(errorName);
  }

  
  submitContact(){
    console.log(this.contactForm.value)
  }


}
