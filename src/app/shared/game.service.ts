import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FirebaseCreateResponse, GameCard} from "../interfaces";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class GameService {
  gamesData: GameCard[] = [
    {
      added: false,
      music: false,
      gameId: 11,
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 500,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: true,
      gameId: 22,
      title: 'GRAND THEFT AUTO',
      id: 2,
      price: 725,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: true,
      gameId: 322,
      title: 'PREMIUM EDITION',
      id: 3,
      price: 1200,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: false,
      gameId: 342,
      title: 'PREMIUM EDITION',
      id: 76,
      price: 1400,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },    {
      added: false,
      music: false,
      gameId: 131,
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 132,
      price: 200,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: true,
      gameId: 2422,
      title: 'GRAND THEFT AUTO',
      id: 223,
      price: 1725,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: true,
      gameId: 322,
      title: 'PREMIUM EDITION',
      id: 35,
      price: 1300,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      added: false,
      music: false,
      gameId: 3542,
      title: 'PREMIUM EDITION',
      id: 765,
      price: 1500,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    }
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 4,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 5,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 6,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 7,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 8,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 9,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 10,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 11,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // },
    // {
    //   added: false,
    //   title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
    //   id: 12,
    //   price: 310,
    //   description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    // }
  ]

  currentGame: GameCard = {
    added: false,
    gameId: 0,
    title: '',
    id: 0,
    price: 0,
    description: ''
  }

  constructor(private http: HttpClient) {
  }

  addGame(game: GameCard): Observable<GameCard> {
    game.added = true
    return this.http.post<GameCard | any>(`${environment.firebaseDatabaseURL}games.json`, game)
      .pipe(map((response: FirebaseCreateResponse) => {
        return {
          ...game,
          id: response.name
        }
      }))
  }

  getGames(): Observable<GameCard[]> {
    return this.http.get<GameCard[]>(`${environment.firebaseDatabaseURL}games.json`)
      .pipe(map((response: {[key: string]: any}) => {

        if(!response) {
          return [{
            id: 'empty',
            price: 0,
            title: '',
            description: '',
            added: false
          }]
        }

        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }))
      }))
  }

  removeGame(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseDatabaseURL}games/${id}.json`)
  }

  // getById(id: string): Observable<GameCard> {
  //   return this.http.get<GameCard>(`${environment.firebaseDatabaseURL}games/${id}.json`)
  //     .pipe(map((game: GameCard) => {
  //       return {
  //         ...game
  //       }
  //     }))
  // }
  getInfo(gameCard: GameCard) {
    this.currentGame = gameCard
    return this.currentGame
  }

  getValue() {
    return this.currentGame
  }
}
