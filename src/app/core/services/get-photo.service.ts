import { Observable, map, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GetPhotoService {
  url: string = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) {}

  getRandomPhoto(): Observable<string> {
    return this.http
      .get<UnsplashResponse>(this.url, {
        headers: {
          Authorization:
            'Client-ID fNK0e4xxVU_N3vnhuIqjaoSvIS2hgKdMUihWpi5Exl8',
        },
      })
      .pipe(map((res) => res.urls.small));
  }
}
