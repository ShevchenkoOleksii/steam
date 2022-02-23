import { Component, OnInit } from '@angular/core';
import {GameService} from "../../shared/game.service";
import {GameCard} from "../../shared/interfaces";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryGames: GameCard[] = []
  searchGames = ''

  constructor(
    private gameService: GameService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

    this.gameService.getGames().subscribe((games) => {
      this.libraryGames = games
    })

  }

  remove(gameCard: GameCard) {
    this.gameService.removeGame(gameCard).subscribe(() => {

      this.libraryGames = this.libraryGames.filter(game => game.id !== gameCard.id)

      this.alertService.success(`You have removed ${gameCard.title} successfully!`)
    })
  }

  share(gameCard: GameCard) {
    this.alertService.success(`You have shared ${gameCard.title} successfully!`)
  }

  download(gameCard: GameCard) {
    this.alertService.success(`You have downloaded ${gameCard.title} successfully!`)
  }
}
