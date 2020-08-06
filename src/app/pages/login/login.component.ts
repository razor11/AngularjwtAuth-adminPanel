import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  error = '';
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {}


  ngOnInit() {
    this.login = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  createForm() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.login.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.login.invalid) {
           return;
       }

       this.loading = true;
       this.authenticationService.login(this.f.username.value, this.f.password.value)
           .pipe(first())
           .subscribe(
               data => {
                   this.router.navigate([this.returnUrl]);
               },
               error => {
                   this.error = error;
                   this.loading = false;
               });
   }
}
