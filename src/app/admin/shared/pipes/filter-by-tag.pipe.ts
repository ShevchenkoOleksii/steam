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
    // console.log(this.filterValue)
    return items.filter(item => {
      return this.filterValue.includes(item.genre)
    })
  }
}

// export class FilterByTagPipe implements PipeTransform {
//   filterValue: any = []
//   transform(items: GameCard[], currentTags: any): GameCard[] {
//
//     if(currentTags.adventure) {
//       this.filterValue.push('adventure')
//     }
//     if(currentTags.action) {
//       this.filterValue.push('action')
//     }
//     if(currentTags.indie) {
//       console.log(currentTags.indie)
//       this.filterValue.push('indie')
//     }
//
//     console.log(this.filterValue)
//     return items.filter(item => {
//       return this.filterValue.includes(item.genre)
//     })
//   }
// }


// export class FilterByTagPipe implements PipeTransform {
//   transform(items: GameCard[], bool: boolean = false): GameCard[] {
//     return items.filter(item => {
//       return item.music === bool
//     })
//   }
// }

// export class FilterByPricePipe implements PipeTransform{
//   transform(games: GameCard[], price = Infinity): GameCard[] {
//     return games.filter(item => {
//       // console.log(item.price)
//       // console.log(price)
//       // console.log((item.price <= price) && (item.music === other))
//       return item.price <= price
//       // console.log(item.music === other)
//       // return item.music === other
//     })
//   }
// }
