import {Pipe, PipeTransform} from "@angular/core";
import {GameCard} from "../../../shared/interfaces";

@Pipe({
  name: 'searchGames'
})

export class SearchGames implements PipeTransform{
  transform(games: GameCard[], search = ''): GameCard[] {
    if(!search.trim()) {
      return games
    }
    return games.filter(game => {
      return game.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
