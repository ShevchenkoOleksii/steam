import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FirebaseCreateResponse, GameCard} from "./interfaces";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class GameService {
  gamesData: GameCard[] = [
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 1,
      title: 'Grand Theft Auto V: Premium Edition',
      id: 1,
      price: 310,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience',
      fullDescription: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.\n' +
        '\n' +
        'GRAND THEFT AUTO V\n' +
        'When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.\n' +
        '\n' +
        'GRAND THEFT AUTO ONLINE\n' +
        'Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.\n' +
        '\n' +
        'THE CRIMINAL ENTERPRISE STARTER PACK\n' +
        'The Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA$10,000,000 if purchased separately.\n' +
        '\n' +
        'LAUNCH YOUR CRIMINAL EMPIRE\n' +
        'Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.\n' +
        '\n' +
        'A FLEET OF POWERFUL VEHICLES\n' +
        'Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.\n' +
        '\n' +
        'WEAPONS, CLOTHING & TATTOOS\n' +
        'You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 2,
      title: 'Home Behind 2',
      id: 2,
      price: 190,
      description: 'Home Behind 2 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war.',
      fullDescription: 'Home Behind 2 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war. Lead a patchwork group of revolutionary fighters into the depths of the government\'s territory as you struggle to overthrow a brutal authoritarian regime!'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 3,
      title: 'Dread Hunger',
      id: 3,
      price: 379,
      description: 'A game of survival and betrayal.',
      fullDescription: 'A game of survival and betrayal. Eight Explorers path their ship through the unforgiving Arctic. Among the crew, two traitors call on dark powers to undermine them.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 4,
      title: 'Vampire Survivors',
      id: 4,
      price: 59,
      description: 'Mow thousands of night creatures and survive until dawn!',
      fullDescription: 'Mow thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 5,
      title: 'Counter-Strike: Global Offensive',
      id: 5,
      price: 410,
      description: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay',
      fullDescription: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 6,
      title: 'Destiny 2: The Witch Queen',
      id: 6,
      price: 639,
      description: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem',
      fullDescription: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem\n' +
        '\n' +
        'The Definitive Destiny Campaign\n' +
        'Delve into Savathûn’s Throne World to uncover the mystery of how she and her Lucent Hive stole the Light. Learn the secrets to crafting new weapons, the new Glaive, and survive the truth within her web of lies.\n' +
        '\n' +
        'New Destination\n' +
        'A twisted wonderland of corruption and splendor, Savathûn’s Throne World plays host to a fragile balance of power. From her palace to the swamp, all that she hides can be found here.\n' +
        '\n' +
        'Weapon Crafting\n' +
        'Create custom weaponry with unique mod, shader, and stat combinations. Master the new Glaive weapon type and unleash powerful melee combos, projectile attacks, and a deployable energy shield.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 7,
      title: 'Sniper Ghost Warrior Contracts',
      id: 7,
      price: 131,
      description: 'Become the ultimate assassin in the most realistic modern warfare sniping game available.',
      fullDescription: 'Become the ultimate assassin in the most realistic modern warfare sniping game available. Engage in an immersive single-player campaign across large, open-ended maps. Tactical thinking, stealth approach and precision in execution of long shots required.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 8,
      title: 'The Witcher® 3: Wild Hunt',
      id: 8,
      price: 539,
      description: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life',
      fullDescription: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 9,
      title: 'Tomb Raider',
      id: 9,
      price: 310,
      description: 'Tomb Raider explores the intense origin story of Lara Croft',
      fullDescription: 'Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 10,
      title: 'Half-Life: Alyx',
      id: 10,
      price: 699,
      description: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series.',
      fullDescription: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 11,
      title: 'Grand Theft Auto V: Premium Edition 2',
      id: 11,
      price: 320,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience',
      fullDescription: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.\n' +
        '\n' +
        'GRAND THEFT AUTO V\n' +
        'When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.\n' +
        '\n' +
        'GRAND THEFT AUTO ONLINE\n' +
        'Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.\n' +
        '\n' +
        'THE CRIMINAL ENTERPRISE STARTER PACK\n' +
        'The Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA$10,000,000 if purchased separately.\n' +
        '\n' +
        'LAUNCH YOUR CRIMINAL EMPIRE\n' +
        'Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.\n' +
        '\n' +
        'A FLEET OF POWERFUL VEHICLES\n' +
        'Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.\n' +
        '\n' +
        'WEAPONS, CLOTHING & TATTOOS\n' +
        'You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 12,
      title: 'Home Behind 3',
      id: 12,
      price: 290,
      description: 'Home Behind 3 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war.',
      fullDescription: 'Home Behind 3 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war. Lead a patchwork group of revolutionary fighters into the depths of the government\'s territory as you struggle to overthrow a brutal authoritarian regime!'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 13,
      title: 'Dread Hunger 2',
      id: 13,
      price: 329,
      description: 'A game of survival and betrayal.',
      fullDescription: 'A game of survival and betrayal. Eight Explorers path their ship through the unforgiving Arctic. Among the crew, two traitors call on dark powers to undermine them.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 14,
      title: 'Vampire Survivors 2',
      id: 14,
      price: 59,
      description: 'Mow thousands of night creatures and survive until dawn!',
      fullDescription: 'Mow thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 15,
      title: 'Counter-Strike: Global Offensive 1',
      id: 15,
      price: 440,
      description: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay',
      fullDescription: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 16,
      title: 'Destiny 2: The Witch Queen 2',
      id: 16,
      price: 439,
      description: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem',
      fullDescription: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem\n' +
        '\n' +
        'The Definitive Destiny Campaign\n' +
        'Delve into Savathûn’s Throne World to uncover the mystery of how she and her Lucent Hive stole the Light. Learn the secrets to crafting new weapons, the new Glaive, and survive the truth within her web of lies.\n' +
        '\n' +
        'New Destination\n' +
        'A twisted wonderland of corruption and splendor, Savathûn’s Throne World plays host to a fragile balance of power. From her palace to the swamp, all that she hides can be found here.\n' +
        '\n' +
        'Weapon Crafting\n' +
        'Create custom weaponry with unique mod, shader, and stat combinations. Master the new Glaive weapon type and unleash powerful melee combos, projectile attacks, and a deployable energy shield.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 17,
      title: 'Sniper Ghost Warrior Contracts 2',
      id: 17,
      price: 231,
      description: 'Become the ultimate assassin in the most realistic modern warfare sniping game available.',
      fullDescription: 'Become the ultimate assassin in the most realistic modern warfare sniping game available. Engage in an immersive single-player campaign across large, open-ended maps. Tactical thinking, stealth approach and precision in execution of long shots required.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 18,
      title: 'The Witcher® 3: Wild Hunt 2',
      id: 18,
      price: 439,
      description: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life',
      fullDescription: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 19,
      title: 'Tomb Raider 2',
      id: 19,
      price: 350,
      description: 'Tomb Raider explores the intense origin story of Lara Croft',
      fullDescription: 'Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 20,
      title: 'Half-Life: Alyx 2',
      id: 20,
      price: 399,
      description: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series.',
      fullDescription: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 21,
      title: 'Grand Theft Auto V: Premium Edition 4',
      id: 21,
      price: 410,
      description: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience',
      fullDescription: 'The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.\n' +
        '\n' +
        'GRAND THEFT AUTO V\n' +
        'When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.\n' +
        '\n' +
        'GRAND THEFT AUTO ONLINE\n' +
        'Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.\n' +
        '\n' +
        'THE CRIMINAL ENTERPRISE STARTER PACK\n' +
        'The Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA$10,000,000 if purchased separately.\n' +
        '\n' +
        'LAUNCH YOUR CRIMINAL EMPIRE\n' +
        'Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.\n' +
        '\n' +
        'A FLEET OF POWERFUL VEHICLES\n' +
        'Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.\n' +
        '\n' +
        'WEAPONS, CLOTHING & TATTOOS\n' +
        'You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 22,
      title: 'Home Behind 4',
      id: 22,
      price: 190,
      description: 'Home Behind 2 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war.',
      fullDescription: 'Home Behind 2 is a Roguelike RPG which set in Scaria, a country engulfed in a ten-year civil war. Lead a patchwork group of revolutionary fighters into the depths of the government\'s territory as you struggle to overthrow a brutal authoritarian regime!'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 23,
      title: 'Dread Hunger 4',
      id: 23,
      price: 349,
      description: 'A game of survival and betrayal.',
      fullDescription: 'A game of survival and betrayal. Eight Explorers path their ship through the unforgiving Arctic. Among the crew, two traitors call on dark powers to undermine them.'
    },
    {
      genre: 'indie',
      added: false,
      music: false,
      gameId: 24,
      title: 'Vampire Survivors 5',
      id: 24,
      price: 159,
      description: 'Mow thousands of night creatures and survive until dawn!',
      fullDescription: 'Mow thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 25,
      title: 'Counter-Strike: Global Offensive 4',
      id: 25,
      price: 370,
      description: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay',
      fullDescription: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 26,
      title: 'Destiny 3: The Witch Queen 4',
      id: 26,
      price: 549,
      description: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem',
      fullDescription: 'Pre-order to unlock the Cosmographicum Exotic Ghost Shell, The Enigma Exotic Emote, and a new emblem\n' +
        '\n' +
        'The Definitive Destiny Campaign\n' +
        'Delve into Savathûn’s Throne World to uncover the mystery of how she and her Lucent Hive stole the Light. Learn the secrets to crafting new weapons, the new Glaive, and survive the truth within her web of lies.\n' +
        '\n' +
        'New Destination\n' +
        'A twisted wonderland of corruption and splendor, Savathûn’s Throne World plays host to a fragile balance of power. From her palace to the swamp, all that she hides can be found here.\n' +
        '\n' +
        'Weapon Crafting\n' +
        'Create custom weaponry with unique mod, shader, and stat combinations. Master the new Glaive weapon type and unleash powerful melee combos, projectile attacks, and a deployable energy shield.'
    },
    {
      genre: 'action',
      added: false,
      music: false,
      gameId: 27,
      title: 'Sniper Ghost Warrior Contracts 5',
      id: 27,
      price: 431,
      description: 'Become the ultimate assassin in the most realistic modern warfare sniping game available.',
      fullDescription: 'Become the ultimate assassin in the most realistic modern warfare sniping game available. Engage in an immersive single-player campaign across large, open-ended maps. Tactical thinking, stealth approach and precision in execution of long shots required.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 28,
      title: 'The Witcher® 6: Wild Hunt 5',
      id: 28,
      price: 739,
      description: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life',
      fullDescription: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 29,
      title: 'Tomb Raider 5',
      id: 29,
      price: 560,
      description: 'Tomb Raider explores the intense origin story of Lara Croft',
      fullDescription: 'Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.'
    },
    {
      genre: 'adventure',
      added: false,
      music: false,
      gameId: 30,
      title: 'Half-Life 4: Alyx',
      id: 30,
      price: 539,
      description: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series.',
      fullDescription: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.'
    },
  ]

  currentGame: GameCard = {
    added: false,
    gameId: 0,
    title: '',
    id: 0,
    price: 0,
    description: ''
  }

  constructor(private http: HttpClient) {}

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

  removeGame(gameCard: GameCard): Observable<void> {
    gameCard.added = false
    return this.http.delete<void>(`${environment.firebaseDatabaseURL}games/${gameCard.id}.json`)
  }

  getInfo(gameCard: GameCard) {
    this.currentGame = gameCard
    return this.currentGame
  }

  getValue() {
    return this.currentGame
  }
}
