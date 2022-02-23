import {Pipe, PipeTransform} from "@angular/core";
import {GameCard} from "../../../shared/interfaces";

@Pipe({
  name: 'filterByPrice'
})

export class FilterByPricePipe implements PipeTransform{
  transform(games: GameCard[], price = Infinity): GameCard[] {
    return games.filter(item => {
      return item.price <= price
    })
  }
}
