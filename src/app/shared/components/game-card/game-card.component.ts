import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {GameCard} from "../../interfaces";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  items: GameCard | any = []

  constructor(private gameService: GameService) {
    // this.items = gameService.gamesData
  }

  ngOnInit(): void {
    this.items = this.gameService.gamesData
  }


  showInfo(item: GameCard) {
    this.gameService.getInfo(item)
  }
}
