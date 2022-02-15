import { Component, OnInit } from '@angular/core';
import {GameCard} from "../../shared/interfaces";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesData: GameCard[] = [
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },
    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    },    {
      title: 'GRAND THEFT AUTO V: PREMIUM EDITION',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
