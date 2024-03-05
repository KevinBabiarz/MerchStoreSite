import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserFull} from "../../models/User";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isConnected: boolean = false;
  connectedUser: UserFull | undefined;

  constructor(private _authServ:AuthService,private _router:Router,private _userServ:UserService) {
  }

  getLogin(){
    return this.isConnected;
  }

  ngOnInit() {
    this._authServ._authSubject$.subscribe( (auth) => {
      this.isConnected = auth !== undefined;
      this.connectedUser = auth;
      // console.log(auth)
    } );
  }

  logout() {
    console.log(this.getLogin())
    this._authServ.logout();
    this._router.navigate(['/']);
  }

}
