import {Pipe, PipeTransform} from "@angular/core";
import {GameCard} from "../../../shared/interfaces";

@Pipe({
  name: 'filterByTag'
})

export class FilterByTagPipe implements PipeTransform {

  filterValue: any = []

  transform(items: GameCard[], adventure: boolean, action: boolean, indie: boolean, arr = []): GameCard[] {
    this.filterValue = arr

    if(adventure) {
      this.filterValue.push('adventure')
    }

    if(action) {
      this.filterValue.push('action')
    }

    if(indie) {
      this.filterValue.push('indie')
    }

    if(!this.filterValue.length) {
      return [{
        title: 'NO GAMES',
        description: '',
        price: 0,
        added: true
      }]
    }

    return items.filter(item => {
      return this.filterValue.includes(item.genre)
    })
  }
}

