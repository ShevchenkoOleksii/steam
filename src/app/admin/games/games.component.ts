import { Component, OnInit } from '@angular/core';
import {GameCard} from "../../shared/interfaces";
import {GameService} from "../../shared/game.service";
import {FilterBoxComponent} from "./filter-box/filter-box.component";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  // gamesData: GameCard[] = [
  //   {
  //     added: false,
  //     gameId: 11,
  //     title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //     id: 1,
  //     price: 510,
  //     description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   },
  //   {
  //     added: false,
  //     gameId: 22,
  //     title: 'GRAND THEFT AUTO',
  //     id: 2,
  //     price: 1210,
  //     description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   },
  //   {
  //     added: false,
  //     title: 'PREMIUM EDITION',
  //     gameId: 42,
  //     id: 3,
  //     price: 320,
  //     description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 4,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 5,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 6,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 7,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 8,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 9,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 10,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 11,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // },
  //   // {
  //   //   added: false,
  //   //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
  //   //   id: 12,
  //   //   price: 310,
  //   //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
  //   // }
  // ]
  gamesData: GameCard[] = []
  // libraryGames: GameCard[] = [...this.gamesData]

  currentPriceFilter = {
    price: 2000,
    music: false,
    indie: true,
    adventure: true,
    action: true
  }

  searchGames = ''

  constructor(
    private gameService: GameService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.gamesData = this.gameService.gamesData

    this.gameService.getGames().subscribe((games) => {
      // this.gamesData = games
      // console.log(games)
      this.gamesData.forEach((item, index) => {
        games.forEach(secondItem => {
          if(secondItem.gameId === item.gameId) {
            this.gamesData[index] = secondItem
          }
        })
      })
    })

    // this.currentPriceFilter = this.filterBox.getPrice()
    // console.log(this.gamesData)
    // this.gamesData = this.gamesData.filter((game) => {
    //   // game.id !== this.libraryGames.id
    //   this.libraryGames.forEach(item => item.id !== game.id)
    // })
    // console.log(this.gamesData)
  }

  addGame(game: GameCard) {
    this.gameService.addGame(game).subscribe(() => {
      // game.added = true
      this.alertService.success(`You have added ${game.title} successfully!`)
    })
  }

  // remove(id: string) {
  //   this.gameService.removeGame(id).subscribe(() => {
  //     this.libraryGames = this.libraryGames.filter((game) => game.id !== id)
  //     console.log(this.libraryGames)
  //   })
  // }

  getPrice() {
    return this.currentPriceFilter
  }

  onChanged(price: number) {
    // console.log(price)
    this.currentPriceFilter.price = price
  }

  onChecked(price: any) {
    // this.currentPriceFilter.indie = price.indie
    // this.currentPriceFilter.action = price.action
    // this.currentPriceFilter.adventure = price.adventure
    // console.log(this.currentPriceFilter)
  }

  onCheckedIndie(indie: any) {
    this.currentPriceFilter.indie = indie
    // console.log(this.currentPriceFilter)
  }

  onCheckedAction(action: any) {
    this.currentPriceFilter.action = action
    // console.log(this.currentPriceFilter)
  }

  onCheckedAdventure(adventure: any) {
    this.currentPriceFilter.adventure = adventure
    // console.log(this.currentPriceFilter)
  }

//   onChecked(obj: any) {
//     this.currentPriceFilter = obj
//   }
}
