import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FirebaseCreateResponse, Friend} from "./interfaces";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class FriendsService {
  constructor(private http: HttpClient) {}

  addFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend | any>(`${environment.firebaseDatabaseURL}friends.json`, friend)
      .pipe(map((response: FirebaseCreateResponse) => {
         return {
           ...friend,
           id: response.name
         }
      }))
  }

  getAllFriends(): Observable<Friend[]> {
    return this.http.get(`${environment.firebaseDatabaseURL}friends.json`)
      .pipe(map((response: {[key: string]: any}) => {
        if(!response) {
          console.log('no friends!')
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
    return this.http.delete<void>(`${environment.firebaseDatabaseURL}friends/${id}.json`)
  }
}
