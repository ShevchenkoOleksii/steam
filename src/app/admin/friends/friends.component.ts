import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../../shared/interfaces";
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({})
  friends: Friend[] = []
  searchResult: Friend[] = []
  searchFriends: any = ''
  searchStatus: boolean = false
  tempValue: Friend = {
    nickname: '',
    added: false
  }

  errorMessage = {
    text: 'No Users',
    status: true
  }

  searchFriendValue = ''

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchFriends: new FormControl(null, [Validators.required])
    })

    this.usersService.getUsers().subscribe(users => {

      this.friends = users.filter(user => user.friend)
    })

    this.searchStatus = false
  }

  remove(friend: Friend) {

    this.tempValue = {
      ...friend,
      added: false,
      friend: false
    }

    this.usersService.editUser(this.tempValue).subscribe(() => {

      this.usersService.getUsers().subscribe(users => {
        this.friends = users.filter(user => user.friend)

        this.updateSearchResult(users)

      })

    })

  }

  addFriend(friend: Friend) {
    this.tempValue = {
      ...friend,
      added: true,
      friend: true
    }

    this.usersService.editUser(this.tempValue).subscribe(() => {

      this.usersService.getUsers().subscribe(users => {
        this.friends = users.filter(user => user.friend)

        this.updateSearchResult(users)

      })

    })

  }

  searchSubmit() {
    this.searchStatus = true

    this.searchFriendValue = this.searchForm.value.searchFriends

    this.usersService.getUsers().subscribe(users => {

      this.updateSearchResult(users)
    })

  }

  updateSearchResult(users: Friend[]) {
    this.searchResult = users.filter(user => {
      return user.nickname.toLowerCase().includes(this.searchFriendValue.toLowerCase())
    })
  }

  likeFriend(friend: Friend) {
    let likeValue = true

    if(friend.like) {
      likeValue = false
    }

    const newValue = {
      ...friend,
      like: likeValue
    }

    this.usersService.editUser(newValue).subscribe(() => {

      this.usersService.getUsers().subscribe(users => {
        this.friends = users.filter(user => user.friend)

        // this.updateSearchResult(users)

      })

    })

  }
}


