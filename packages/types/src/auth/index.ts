import { UserType } from '../common'

export interface AuthPayload {
  sub: string
  username: string
  type: UserType
}

export interface AuthReq {
  username: string
  password: string
}

export interface AuthRes {
  access_token: string
}
