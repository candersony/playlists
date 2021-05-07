import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { PlaylistClient } from '../api/playlist-client.service';
import { RefreshClicked } from '../actions/refresh-clicked.action';
import { toPlaylistCollections } from '../models/playlist-collection';
import { LoadPlaylists } from '../actions/load-playlists.action';
import { PlaylistStateModel } from './playlist-state.model';
import { shuffleResponse } from './shuffle';

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

  @Action(LoadPlaylists, { cancelUncompleted: true })
  load({ setState }: StateContext<PlaylistStateModel>) {
    return this.playlistClient.playlists$.pipe(
      map(shuffleResponse),
      map(toPlaylistCollections),
      tap(setState)
    );
  }

  @Action(RefreshClicked)
  refresh({ dispatch }: StateContext<PlaylistStateModel>) {
    return dispatch(new LoadPlaylists());
  }
}
