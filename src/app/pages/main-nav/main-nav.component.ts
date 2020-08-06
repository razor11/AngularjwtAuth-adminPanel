import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  currentUser: User;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthService,
    private router: Router,
    public userService: UserService,
  ) {this.authenticationService.currentUser.subscribe(x => this.currentUser = x);}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}


}
