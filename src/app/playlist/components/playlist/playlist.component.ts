import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlaylistCollection } from '../../models/playlist-collection';
import { PlaylistStateModel } from '../../store/playlist-state.model';
import { PlaylistState } from '../../store/playlist.state';
import { RefreshClicked } from './refresh-clicked.action';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent {
  @Select(PlaylistState) playlists$: Observable<PlaylistStateModel> | undefined;

  constructor(private readonly store: Store) {}

  refreshPlaylists(): void {
    this.store.dispatch(new RefreshClicked());
  }

  trackByName(index: number, collection: PlaylistCollection) {
    return collection.name;
  }
}
