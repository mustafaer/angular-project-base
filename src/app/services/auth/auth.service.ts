import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {server} from '../server';
import {TranslatePipe} from '../../pipes/translate/translate.pipe';
import {Items} from '../../shared/appItems';

@Injectable()
export class AuthService {
  connErrorImage = Items.connError;
  TOKEN_KEY = 'token';
  token = localStorage.getItem(this.TOKEN_KEY);
  lang = localStorage.getItem('lang');
  headerWithToken = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Cache-Control', ' no-cache')
    .set('Content-Type', 'application/json')
    .set('Accept-Language', this.lang)
    .set('Authorization', 'Token ' + this.token);
  headerWithoutToken = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Cache-Control', ' no-cache')
    .set('Content-Type', 'application/json')
    .set('Accept-Language', this.lang);

  constructor(private http: HttpClient,
              private translate: TranslatePipe,
              private router: Router) {
  }

  ServerGet(address: string) {
    const headers = this.headerWithToken;
    const options = {headers: headers};
    return this.http.get(address, options)
      .pipe(
        map(res => res),
        catchError((err) => {
          this.ServerError(err);
          return throwError(err);
        }));
  }

  ServerGetLogin(address: string) {
    const headers = this.headerWithoutToken;
    const options = {headers: headers};
    return this.http.get(address, options)
      .pipe(
        map(res => res),
        catchError((err) => {
          this.ServerError(err);
          return throwError(err);
        }));
  }

  ServerPost(address: string, data: any) {
    const headers = this.headerWithToken;
    const options = {headers: headers};
    return this.http.post(address, data, options)
      .pipe(
        map(res => res),
        catchError((err) => {
          this.ServerError(err);
          return throwError(err);
        }));
  }

  ServerPostLogin(address: string, data: any) {
    const headers = this.headerWithoutToken;
    const options = {headers: headers};
    return this.http.post(address, data, options)
      .pipe(
        map(res => res),
        catchError((err) => {
          this.ServerError(err);
          return throwError(err);
        }));
  }

  ClearSession() {
    const tempLang = localStorage.getItem('lang');
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('lang', tempLang);
    this.router.navigate(['/']).then(r => {
      console.log('session cleaned')
    });
  }

  ServerLogout() {
    this.ServerGet(server.sessionClose)
      .subscribe(res => {
        this.ClearSession();
      }, err => {
      });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  CheckAccess() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return JSON.parse(window.atob((token).split('.')[1])).userType;
  }

  ServerError(err) {
    if (err.status === 200 || err.status === 500) {
      // @ts-ignore
      alertify.alert(
        '',
        `<center><img style='width: 60px; height: 60px;' [src]='${this.connErrorImage}'></center><br>
            <center><b>${this.translate.transform('ConError', [])}</b></center><br>
            <center><p class='notification-message'>${this.translate.transform('ConErrorInfo', [])}</p></center>`
      ).setting({
        'label': this.translate.transform('Okay', []),
      });
    } else if (err.status === 401) {
      this.router.navigateByUrl('/').then(r => {
        console.log('Unauthorized')
      });
    }
  }
}
