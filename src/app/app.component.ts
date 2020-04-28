import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForms';
  // state: {login: string, pass: string} = {
  //   login: '',
  //   pass: ''
  // };

  // loginForm: {login: string, password: string} = {
  //   login: 'def login',
  //   password: 'def password'
  // };

  forma: FormGroup;
  login: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);

  constructor() {
    this.forma = new FormGroup({
     login: this.login,
     password: this.password
    });
  }

  // saveValue(input: HTMLInputElement) {
  //   this.state = input.value;
  // }
  checkState(forma: FormGroup) {
    console.log(forma);
  }
}
