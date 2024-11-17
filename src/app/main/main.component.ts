import { Component } from '@angular/core';
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { PostListComponent } from '../post-list/post-list.component';
import { WelcomeMsgComponent } from '../shared/welcome-msg/welcome-msg.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemeListComponent, PostListComponent, WelcomeMsgComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) {}
}
