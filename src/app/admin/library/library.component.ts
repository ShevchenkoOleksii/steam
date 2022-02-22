import { Component, OnInit } from '@angular/core';
import {GameService} from "../../shared/game.service";
import {GameCard} from "../../shared/interfaces";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryGames: GameCard[] = []
  searchGames = ''

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getGames().subscribe((games) => {
      this.libraryGames = games
    })

  }

  remove(gameCard: GameCard) {
    this.gameService.removeGame(gameCard).subscribe(() => {
      this.libraryGames = this.libraryGames.filter(game => game.id !== gameCard.id)
      // gameCard.added = false
    })
  }

  share(game: any) {

  }

  download(game: any) {

  }
}
