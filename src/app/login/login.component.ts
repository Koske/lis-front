import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

    // this.authService.login('nesa823@gmail.com', 'Veternik91');

  }

  onLogin(form: NgForm) {
    console.log(form.value);
    this.authService.login(form.value);
  }

}
