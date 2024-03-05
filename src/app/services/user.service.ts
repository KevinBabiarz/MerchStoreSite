import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDTO} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/user";
  constructor(private _httpClient: HttpClient) { }

  getOne(id: number): Observable<UserDTO> {
    return this._httpClient.get<UserDTO>(`${this.url}/${id}`);
  }
}
