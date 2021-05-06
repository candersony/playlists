import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, shareReplay, startWith, switchMapTo } from 'rxjs/operators';
import { PlaylistResponse } from './api/models/playlist-response';
import { PlaylistClient } from './api/playlist-client.service';
import { createPlaylistCollection } from './models/playlist-collection';

@Injectable()
export class PlaylistProvider {
  private readonly refresh$ = new Subject();

  public readonly playlists$ = this.refresh$.pipe(
    startWith(true),
    switchMapTo(this.playlistClient.playlists$),
    map(toPlaylistCollections),
    shareReplay(1)
  );

  constructor(private readonly playlistClient: PlaylistClient) {}

  public refreshPlaylists(): void {
    this.refresh$.next();
  }
}

const toPlaylistCollections = (response: PlaylistResponse) =>
  Object.values(response).map(createPlaylistCollection);
