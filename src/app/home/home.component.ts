import { Component } from '@angular/core';
import { WelcomeMsgComponent } from '../shared/welcome-msg/welcome-msg.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeMsgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) {}
}
