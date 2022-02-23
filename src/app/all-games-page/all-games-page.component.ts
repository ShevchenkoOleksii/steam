import { Component, OnInit } from '@angular/core';
import {GameCard} from "../shared/interfaces";
import {GameService} from "../shared/game.service";

@Component({
  selector: 'app-all-games-page',
  templateUrl: './all-games-page.component.html',
  styleUrls: ['./all-games-page.component.css']
})

export class AllGamesPageComponent implements OnInit {

  game: GameCard = {
    added: false,
    gameId: 0,
    title: '',
    id: 0,
    price: 0,
    description: ''
  }

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.game = this.gameService.getValue()
  }

}
