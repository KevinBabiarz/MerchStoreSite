import { Injectable } from '@angular/core';
import {UserDTO, UserFull} from "../models/User";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/login";
  private readonly AUTH_KEY = 'auth';
  _authSubject$: BehaviorSubject<UserFull | undefined>
  private isloggedIn: boolean;
  constructor(private _httpClient : HttpClient, private _userServ: UserService) {
    this._authSubject$ = new BehaviorSubject<UserFull | undefined>(this.authData)
    this.isloggedIn=false;
  }

  get authData(): UserFull | undefined {
    const authDataString = sessionStorage.getItem(this.AUTH_KEY)

    if( !authDataString )
      return undefined;
    // console.log(JSON.parse(authDataString))
    return JSON.parse(authDataString)
  }

  getLogin(){
    return sessionStorage.getItem(this.AUTH_KEY);
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_KEY)
    this._authSubject$.next( this.authData )
  }

  login(login:FormGroup){
    this.isloggedIn = true;

    return this._httpClient.post<UserFull>(this.url,login).pipe(
      tap( data => {
        sessionStorage.setItem(this.AUTH_KEY, JSON.stringify(data))
        this._authSubject$.next( this.authData )
      } )
    );
  }

  getUserFullDTOSubject(id:number):Observable<UserDTO>{
    return this._userServ.getOne(id);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }


}


