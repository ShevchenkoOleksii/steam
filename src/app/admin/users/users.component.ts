import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {UsersService} from "../../shared/users.service";
import {AlertService} from "../shared/services/alert.service";

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

  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) { }

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
      friend: false,
      like: false
    }

    this.usersService.addUser(user).subscribe(() => {
      this.friendForm.reset()

      this.updateSub = this.usersService.getUsers().subscribe(users => {
        this.users = users
      })

      this.alertService.success(`You have added ${user.nickname} successfully!`)
    })

  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe()
    }
    if(this.delSub) {
      this.delSub.unsubscribe()
    }
  }

  remove(item: Friend) {
    this.delSub = this.usersService.remove(item.id).subscribe(() => {
      this.users = this.users.filter((user => user.id !== item.id))
      this.alertService.success(`You have removed ${item.nickname} successfully!`)
    })
  }
}
