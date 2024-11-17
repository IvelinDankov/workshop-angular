import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    let { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }

  getThemes() {
    let { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getOne(id: string) {
    let { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    //
    let { apiUrl } = environment;
    const payload = { themeName, postText };
    return this.http.post<Theme>(`${apiUrl}/themes`, payload);
  }
}
