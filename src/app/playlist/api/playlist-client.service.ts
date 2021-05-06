import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaylistResponse } from './models/playlist-response';

@Injectable()
export class PlaylistClient {
  public readonly playlists$ = this.http.get<PlaylistResponse>(
    'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json'
  );

  constructor(private readonly http: HttpClient) {}
}
