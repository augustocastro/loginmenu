import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../model/Login';
import { Token } from '../model/Token';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      senha: ['']
    })
  }

  login() {
    const login: Login = this.loginForm.getRawValue();

    this.loginService.login(login)
      .subscribe((token: Token) => {
        this.userService.setToken(token.tipo + ' ' + token.token);
        this.router.navigate(['/menu'])
      },
        error => console.log(error.message));
  }
}