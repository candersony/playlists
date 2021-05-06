import { Component } from '@angular/core';
import { PlaylistProvider } from '../../playlist-provider.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent {
  constructor(public readonly playlistProvider: PlaylistProvider) {}
}
