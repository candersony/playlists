import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaylistCollection } from '../../models/playlist-collection';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent {
  @Input() playlists: PlaylistCollection[] | undefined | null;
  @Output() refreshClicked = new EventEmitter();

  trackByName(index: number, collection: PlaylistCollection) {
    return collection.name;
  }
}
