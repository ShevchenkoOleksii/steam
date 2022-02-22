import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FirebaseCreateResponse, Friend, UserProfile} from "./interfaces";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {
  }

  addUser(user: Friend): Observable<Friend> {
    return this.http.post<Friend | any>(`${environment.firebaseDatabaseURL}users.json`, user)
      .pipe(map((response: FirebaseCreateResponse) => {
        return {
          ...user,
          id: response.name
        }
      }))
  }

  getUsers(): Observable<Friend[]> {
    return this.http.get(`${environment.firebaseDatabaseURL}users.json`)
      .pipe(map((response: {[key: string]: any}) => {
        if(!response) {
          console.log('no users!')
          return [
            {
              id: 0,
              added: false,
              nickname: '',
              friend: false
            }
          ]
        }
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }))
      }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseDatabaseURL}users/${id}.json`)
  }

  editProfile(userProfile: UserProfile): Observable<UserProfile> {
    return this.http.patch<UserProfile | any>(`${environment.firebaseDatabaseURL}profile.json`, userProfile)
      .pipe(map((response: FirebaseCreateResponse) => {
        return {
          ...userProfile,
          id: response.name
        }
      }))
  }

  getProfile(): Observable<UserProfile> {
    return this.http.get(`${environment.firebaseDatabaseURL}profile.json`)
      .pipe(map((response: any) => {
        return response
      }))
  }

  editUser(user: Friend): Observable<Friend> {
    return this.http.patch<Friend | any>(`${environment.firebaseDatabaseURL}users/${user.id}.json`, user)
      .pipe(map((response: FirebaseCreateResponse) => {
        return {
          ...user,
          // id: response.name,

          // nickname: user.nickname,
          id: user.id,
          // added: true
        }
      }))
  }
}
