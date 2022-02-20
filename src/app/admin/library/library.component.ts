import { Component, OnInit } from '@angular/core';
import {GameService} from "../../shared/components/game.service";
import {GameCard} from "../../shared/interfaces";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryGames: GameCard[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getGames().subscribe((games) => {
      this.libraryGames = games
    })

  }

  remove(id: string) {
    this.gameService.removeGame(id).subscribe(() => {
      this.libraryGames = this.libraryGames.filter(game => game.id !== id)
    })
  }

}
