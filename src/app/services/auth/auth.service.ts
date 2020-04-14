import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseAuth } from 'src/app/schemas/responseAuth';


declare var CryptoJS;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser = new ReplaySubject<any>(1);

  constructor(public jwtHelper: JwtHelperService,
              private readonly http: HttpClient) { }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string): Observable<any> {


    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let body = {
      'username': CryptoJS.AES.encrypt(username).toString(CryptoJS.enc.Utf8),
      'password': CryptoJS.AES.encrypt(password).toString(CryptoJS.enc.Utf8)
    };

    return this.http.post('url', JSON.stringify(body), { headers: headers })
      .pipe(
        map((res: ResponseAuth) => this.handleJwtResponse(res.token))
      );


  }

  private handleJwtResponse(jwt: string) {
    return localStorage.set('jwt', jwt)
        .then(() => this.authUser.next(jwt))
        .then(() => jwt);
}

logout() {

  localStorage.remove('jwt').then(() => this.authUser.next(null));
}

}
