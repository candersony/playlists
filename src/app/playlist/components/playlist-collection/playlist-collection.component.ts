import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PlaylistCollection } from '../../models/playlist-collection';

@Component({
  selector: 'app-playlist-collection',
  templateUrl: './playlist-collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistCollectionComponent {
  @Input() collection: PlaylistCollection | undefined;
}
