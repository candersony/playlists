import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RefreshClicked } from '../../actions/refresh-clicked.action';
import { PlaylistStateModel } from '../../store/playlist-state.model';
import { PlaylistState } from '../../store/playlist.state';

@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistsPageComponent {
  @Select(PlaylistState) playlists$: Observable<PlaylistStateModel> | undefined;

  constructor(private readonly store: Store) {}

  handleRfreshClicked(): void {
    this.store.dispatch(new RefreshClicked());
  }

}
