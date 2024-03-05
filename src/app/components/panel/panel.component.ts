import {Component, OnInit} from '@angular/core';
import {UserDTO, UserFull} from "../../models/User";
import {MenuItem} from "primeng/api";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {adminLink, userLink} from "../../models/Link";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    AsyncPipe,
    TabMenuModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
  items: MenuItem[] | undefined;
  isConnected: boolean = false;

  activeItem: MenuItem | undefined
  connectedUser: UserFull | undefined;
  userProfile: UserDTO | undefined;
  userSubject!: Observable<UserDTO>;

  constructor(private _authServ: AuthService, private _userService: UserService) {

  }

  ngOnInit() {
    this._authServ._authSubject$.subscribe((auth) => {
      console.log("auth", auth)

      this.userSubject = this._authServ.getUserFullDTOSubject(auth?.id!)
      this.connectedUser = auth

      const userItems = userLink;
      const adminItems = adminLink;
      if (this.connectedUser?.role === 'USER') {
        this.items = userItems;
      } else {
        this.items = adminItems;
      }
      this.activeItem = this.items[0];
    });
  }
}
