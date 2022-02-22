import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  friendForm: FormGroup = new FormGroup({})
  users: Friend[] = []
  sub: Subscription = new Subscription
  searchFriends: string = ''
  delSub: Subscription = new Subscription
  updateSub: Subscription = new Subscription

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.friendForm = new FormGroup({
      nickname: new FormControl(null, [Validators.required])
    })

    this.sub = this.usersService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  submit() {
    if(this.friendForm.invalid) {
      return
    }

    const user: Friend = {
      nickname: this.friendForm.value.nickname,
      added: false,
      friend: false
    }

    this.usersService.addUser(user).subscribe(() => {
      this.friendForm.reset()

      this.updateSub = this.usersService.getUsers().subscribe(users => {
        this.users = users
      })

    })





  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe()
      // console.log('sub.unsubscribe')
    }
    if(this.delSub) {
      this.delSub.unsubscribe()
      // console.log('delSub.unsubscribe')
    }
    // if(this.updateSub) {
    //   this.updateSub.unsubscribe()
    //   console.log('updateSub.unsubscribe')
    // }
  }

  like(id: string) {

  }

  remove(item: Friend) {
    console.log(item)
    this.delSub = this.usersService.remove(item.id).subscribe(() => {
      this.users = this.users.filter((user => user.id !== item.id))
    })
  }
}
