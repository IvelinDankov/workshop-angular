import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { MainComponent } from './main/main.component';
import { CurrThemeComponent } from './theme/curr-theme/curr-theme.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // User Routing
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  // Start Theme routing
  {
    path: 'themes',
    children: [
      { path: '', component: MainComponent },
      { path: ':themeId', component: CurrThemeComponent },
    ],
  },
  { path: 'add-theme', component: AddThemeComponent, canActivate: [AuthGuard] },

  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];
