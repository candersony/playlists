import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { PlaylistClient } from '../api/playlist-client.service';
import { RefreshClicked } from '../components/playlist/refresh-clicked.action';
import { toPlaylistCollections } from '../models/playlist-collection';
import { LoadPlaylists } from './load-playlists.action';
import { PlaylistStateModel } from './playlist-state.model';

@State<PlaylistStateModel>({
  name: 'playlist',
  defaults: [],
})
@Injectable()
export class PlaylistState {
  constructor(private readonly playlistClient: PlaylistClient) {}

  ngxsOnInit({ dispatch }: StateContext<PlaylistStateModel>) {
    return dispatch(new LoadPlaylists());
  }

  @Action(LoadPlaylists)
  load({ setState }: StateContext<PlaylistStateModel>) {
    return this.playlistClient.playlists$.pipe(
      map(toPlaylistCollections),
      tap(setState)
    );
  }

  @Action(RefreshClicked)
  refresh({ dispatch }: StateContext<PlaylistStateModel>) {
    return dispatch(new LoadPlaylists());
  }
}
