import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Friend} from "../../shared/interfaces";
import {FriendsService} from "../../shared/friends.service";
import {Subscription} from "rxjs";
import {UsersService} from "../../shared/users.service";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {

  friendForm: FormGroup = new FormGroup({})
  searchForm: FormGroup = new FormGroup({})
  friends: Friend[] = []
  searchResult: Friend[] = []
  sub: Subscription = new Subscription
  searchFriends: any = ''
  delSub: Subscription = new Subscription
  updateSub: Subscription = new Subscription
  searchStatus: boolean = false
  tempValue: Friend = {
    nickname: '',
    added: false
  }

  errorMessage = {
    text: 'No Users',
    status: true
  }


  constructor(
    private friendsService: FriendsService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchFriends: new FormControl(null, [Validators.required])
    })

    this.friendForm = new FormGroup({
      nickname: new FormControl(null, [Validators.required])
    })

    this.sub = this.friendsService.getAllFriends().subscribe(friends => {
      // if(friends[0].id === '404') {
      //   this.errorMessage.status = true
      // }
      // if(true) {
      //   this.errorMessage.status = true
      //   return
      // }
      this.friends = friends
    })

    this.searchStatus = false
  }

  submit() {
    if(this.friendForm.invalid) {
      return
    }

    const friend: Friend = {
      nickname: this.friendForm.value.nickname,
      added: true
    }

    this.friendsService.addFriend(friend).subscribe(() => {
       // this.friendForm.reset()

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

  remove(friend: Friend) {
    console.log(friend)
    this.friendsService.remove(friend).subscribe(() => {
      // this.tempValue = {
      //   ...friend,
      //   added: false
      // }

      // this.usersService.editUser({
      //   ...friend,
      //   added: false
      // }).subscribe((value) => {
      //   // this.friendsService.getAllFriends().subscribe(friends => {
      //     // this.friends = friends.filter((item => !item.added))
      //     console.log(value)
      //
      //     // this.friends = this.friends.filter((item => item.id !== value.id))
      //   // }
      // })


      // this.usersService.editUser(this.tempValue).subscribe(() => {
      //   this.updateSub = this.friendsService.getAllFriends().subscribe(friends => {
      //     // this.friends = friends
      //     // this.friends = this.friends.filter((item => item.id !== friend.id))
      //   })
      // })


      // this.searchSubmit()
      // this.friends = this.friends.filter((item => item.added))


      this.friends = this.friends.filter((item => item.id !== friend.id))
    })
    // this.usersService.editUser({
    //   ...friend,
    //   added: false
    // }).subscribe((value) => {
    //   // this.friendsService.getAllFriends().subscribe(friends => {
    //   // this.friends = friends.filter((item => !item.added))
    //   console.log(value)
    //
    //   // this.friends = this.friends.filter((item => item.id !== value.id))
    //   // }
    // })
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  //   if(this.updateSub) {
  //     this.updateSub.unsubscribe()
  //     console.log('updateSub.unsubscribe')
  //   }
  // }
  addFriend(friend: Friend) {
    this.friendsService.addFriend(friend).subscribe(() => {

      this.tempValue = {
        ...friend,
        added: true
      }

      this.usersService.editUser({
        ...friend,
        added: true
      }).subscribe(() => {
        this.updateSub = this.friendsService.getAllFriends().subscribe(friends => {
          this.friends = friends
        })
      })



      // this.updateSub = this.friendsService.getAllFriends().subscribe(friends => {
      //   this.friends = friends
      //   console.log(this.friends)
      // })

    })
  }

  searchSubmit() {
    this.searchStatus = true

    const searchFriend = {
      nickname: this.searchForm.value.searchFriends
    }

    this.usersService.getUsers().subscribe(users => {
      // if(users[0].id === '404') {
      //   this.errorMessage.status = true
      // }

      this.searchResult = users.filter(user => {
        return user.nickname.toLowerCase().includes(searchFriend.nickname.toLowerCase())
      })
    })

    // this.friendsService.addFriend(searchFriend).subscribe(() => {
    //   this.friendForm.reset()
    //
    //   //logic
    //   this.updateSub = this.friendsService.getAllFriends().subscribe(friends => {
    //     this.friends = friends
    //   })
    //   //logic
    //
    //   console.log('reset form')
    // })
  }
}
