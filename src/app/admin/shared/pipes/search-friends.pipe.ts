import {Pipe, PipeTransform} from "@angular/core";
import {Friend} from "../../../shared/interfaces";

@Pipe({
  name: 'searchFriends'
})
export class SearchFriendsPipe implements PipeTransform{
  transform(friends: Friend[], search = ''): Friend[] {
    if(!search.trim()) {
      return friends
    }

    return friends.filter((friend) => {
      return friend.nickname.toLowerCase().includes(search.toLowerCase())
    })
  }

}
