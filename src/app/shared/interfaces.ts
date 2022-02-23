export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FirebaseAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Friend {
  id?: string | any
  nickname: string,
  added: boolean,
  friend?: boolean,
  like?: boolean
}

export interface FirebaseCreateResponse {
  name: string
}

export interface GameCard {
  title: string
  description: string
  price: number
  id?: string | any,
  added: boolean,
  gameId?: number,
  music?: boolean,
  genre?: string,
  fullDescription?: string
}

export interface UserProfile {
  username: string,
  age: number,
  email: string
}
