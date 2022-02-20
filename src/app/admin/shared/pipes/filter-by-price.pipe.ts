import {Pipe, PipeTransform} from "@angular/core";
import {GameCard} from "../../../shared/interfaces";

@Pipe({
  name: 'filterByPrice'
})

export class FilterByPricePipe implements PipeTransform{
  transform(games: GameCard[], price = Infinity): GameCard[] {
    return games.filter(item => {
      // console.log(item.price)
      // console.log(price)
      // console.log((item.price <= price) && (item.music === other))
      return item.price <= price
      // console.log(item.music === other)
      // return item.music === other
    })
  }
}
