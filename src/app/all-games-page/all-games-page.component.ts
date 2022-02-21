import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {GameCard} from "../shared/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {GameService} from "../shared/game.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-all-games-page',
  templateUrl: './all-games-page.component.html',
  styleUrls: ['./all-games-page.component.css']
})
export class AllGamesPageComponent implements OnInit {

  // games$: Observable<GameCard> = new Observable<GameCard>()
  game: GameCard = {
    added: false,
    gameId: 0,
    title: '',
    id: 0,
    price: 0,
    description: ''
  }


  constructor(
    // private route: ActivatedRoute,
    private gameService: GameService

  ) {
    // this.game = this.gameService.currentGame
  }

  ngOnInit(): void {
    // this.games$ = this.route.params
    //   .pipe(switchMap((params: Params) => {
    //     return this.gameService.getById(params['id'])
    //   }))

    this.game = this.gameService.getValue()
    // this.games$ = this.gameService.getValue()
  }


}
