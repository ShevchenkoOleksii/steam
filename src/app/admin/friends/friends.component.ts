import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../../shared/interfaces";
import {FriendsService} from "../../shared/friends.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {

  friendForm: FormGroup = new FormGroup({})
  friends: Friend[] = []
  sub: Subscription = new Subscription
  searchFriends: string = ''
  delSub: Subscription = new Subscription
  updateSub: Subscription = new Subscription

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendForm = new FormGroup({
      nickname: new FormControl(null, [Validators.required])
    })

    this.sub = this.friendsService.getAllFriends().subscribe(friends => {
      this.friends = friends
    })
  }

  submit() {
    if(this.friendForm.invalid) {
      return
    }

    const friend: Friend = {
      nickname: this.friendForm.value.nickname
    }

    this.friendsService.addFriend(friend).subscribe(() => {
       this.friendForm.reset()

      //logic
      this.updateSub = this.friendsService.getAllFriends().subscribe(friends => {
        this.friends = friends
      })
      //logic

      console.log('reset form')
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

  remove(id: string) {
    this.delSub = this.friendsService.remove(id).subscribe(() => {
      this.friends = this.friends.filter((friend => friend.id !== id))
    })
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   if(this.updateSub) {
  //     this.updateSub.unsubscribe()
  //     console.log('updateSub.unsubscribe')
  //   }
  // }
}
