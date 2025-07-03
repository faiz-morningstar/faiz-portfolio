import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('moveButton', { static: true }) moveButton:any;

  siteKey = "6LckxkQmAAAAANlkJqRO_eTT9F5SMpr0GhYyg9xm"
  contactForm:FormGroup
  constructor(fb:FormBuilder, private reCaptchaV3Service: ReCaptchaV3Service) {
    this.contactForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      message:['',Validators.required]
    });
   }
 

  ngOnInit(): void {
    this.reCaptchaV3Service.execute(this.siteKey, 'contact page', (token) => {
      console.log('This is your token: ', token);
    }, {
        useGlobalDomain: false
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.contactForm.controls[controlName]?.hasError(errorName);
  }

  moveLeft:any = 0
  mouseEnter(){
    const randomPosition = Math.random() * (610 - 0) + (0);
    this.moveLeft = randomPosition
  }

  submitContact(){
    console.log(this.contactForm.valid)
  }

}
