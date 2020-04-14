import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  error = '';

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  getError(el) {
    switch (el) {
      case 'user':
        if (this.login.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.login.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }


  get f() { return this.login.controls; }

  onSubmit(post) {
    this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/sidenav']);
        },
        error => {
            this.error = error;
        });
  }


}
