import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [RouterLink, LoaderComponent],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css',
})
export class ThemeListComponent {
  constructor(private apiService: ApiService) {}
  themes: Theme[] = [];
  isLoader = true;

  ngOnInit() {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
      this.isLoader = false;

      console.log({ themes });
    });
  }
}
