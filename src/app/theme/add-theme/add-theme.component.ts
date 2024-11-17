import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css',
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(event: Event, themeName: string, postText: string) {
    //ThemeName - Post Value
    event.preventDefault();
    console.log({ themeName, postText });

    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      console.log(data);
    });
  }
}
