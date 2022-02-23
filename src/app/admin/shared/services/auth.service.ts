import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FirebaseAuthResponse, User} from "../../../shared/interfaces";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";


@Injectable({providedIn: 'root'})

export class AuthService {
  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {}

  get token(): string | null {
    const tempVar = localStorage.getItem('fb-token-exp')

    const expDate = tempVar ? new Date(tempVar) : new Date()
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('INVALID EMAIL')
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('INVALID PASSWORD')
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('EMAIL NOT FOUND')
        break;
    }

    return throwError(error)
  }

  private setToken(response: FirebaseAuthResponse | null | any) {

    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)

      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }

  }
}
