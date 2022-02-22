import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/users.service";
import {UserProfile} from "../../shared/interfaces";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userEmail = 'test@mail.com'
  profileData: UserProfile = {
    username: '',
    email: '',
    age: 18
  }

  profileForm: FormGroup = new FormGroup({})

  constructor(
    private userService: UsersService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(this.userEmail, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.maxLength(3)])
    })

    this.userService.getProfile().subscribe(profile => {
      this.profileData = profile
      console.log(this.profileData)

      this.profileForm = new FormGroup({
        username: new FormControl(this.profileData.username, [Validators.required]),
        email: new FormControl(this.profileData.email, [Validators.required]),
        age: new FormControl(this.profileData.age, [Validators.required, Validators.maxLength(3)])
      })
    })
    // console.log(this.profileData)

    // this.profileForm = new FormGroup({
    //   username: new FormControl(this.profileData.username, [Validators.required]),
    //   email: new FormControl(this.profileData.email, [Validators.required]),
    //   age: new FormControl(this.profileData.age, [Validators.required, Validators.maxLength(3)])
    // })
    // this.profileForm = new FormGroup({
    //   username: new FormControl(null, [Validators.required]),
    //   email: new FormControl(this.userEmail, [Validators.required]),
    //   age: new FormControl(null, [Validators.required, Validators.maxLength(3)])
    // })
  }

  submitProfileForm() {
    const userProfile: UserProfile = {
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      age: this.profileForm.value.age
    }

    this.userService.editProfile(userProfile).subscribe(() => {
      this.alertService.success(`You have saved the data successfully!`)
    })
  }
}
