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
  nickname: string
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
  music?: boolean
}
