import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistCardComponent {
  @Input() playlist: Playlist | undefined;
}
