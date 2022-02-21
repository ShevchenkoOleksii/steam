import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {HttpClient} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";
import {SearchFriendsPipe} from "./shared/pipes/search-friends.pipe";
import { FilterBoxComponent } from './games/filter-box/filter-box.component';
import {FilterByPricePipe} from "./shared/pipes/filter-by-price.pipe";
import {FilterByTagPipe} from "./shared/pipes/filter-by-tag.pipe";
import {SearchGamesPipe} from "./shared/pipes/search-games.pipe";
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginPageComponent
          },
          {
            path: 'games',
            component: GamesComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'library',
            component: LibraryComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'friends',
            component: FriendsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'users',
            component: UsersComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    GamesComponent,
    LibraryComponent,
    FriendsComponent,
    ProfileComponent,
    SearchFriendsPipe,
    FilterBoxComponent,
    FilterByPricePipe,
    FilterByTagPipe,
    SearchGamesPipe,
    UsersComponent
  ],
  providers: [
    AuthGuard
  ]
})

export class AdminModule {
  constructor(private http: HttpClient) {
  }
}
