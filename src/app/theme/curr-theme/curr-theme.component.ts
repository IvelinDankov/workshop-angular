import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-curr-theme',
  standalone: true,
  imports: [],
  templateUrl: './curr-theme.component.html',
  styleUrl: './curr-theme.component.css',
})
export class CurrThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // this.route.params.subscribe((data) => {
    //   console.log(data['themeId']);
    // });
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getOne(id).subscribe((theme) => {
      this.theme = theme;
    });
  }
}
