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

  gamesData: GameCard[] = []

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

      this.gamesData.forEach((item, index) => {
        games.forEach(secondItem => {
          if(secondItem.gameId === item.gameId) {
            this.gamesData[index] = secondItem
          }
        })
      })
    })
  }

  addGame(game: GameCard) {
    this.gameService.addGame(game).subscribe(() => {
      this.alertService.success(`You have added ${game.title} successfully!`)
    })
  }

  getPrice() {
    return this.currentPriceFilter
  }

  onChanged(price: number) {
    this.currentPriceFilter.price = price
  }

  onCheckedIndie(indie: any) {
    this.currentPriceFilter.indie = indie
  }

  onCheckedAction(action: any) {
    this.currentPriceFilter.action = action
  }

  onCheckedAdventure(adventure: any) {
    this.currentPriceFilter.adventure = adventure
  }

}
