import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  formInfo = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required)
  })

  takingValuesFromInputs() {
    if (this.formInfo.valid) {
      let values = this.formInfo.value;
      console.log(values);
    }
    
  }
}
