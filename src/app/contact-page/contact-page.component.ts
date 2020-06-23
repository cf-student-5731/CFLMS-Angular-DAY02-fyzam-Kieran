import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.info.valid){
        var a = this.info.value;
        console.log(a)
    }
    if(!this.info.valid){
      alert('Enter something');
  }

}
}
