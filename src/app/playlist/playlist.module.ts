import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { PlaylistCollectionComponent } from './components/playlist-collection/playlist-collection.component';
import { PlaylistClient } from './api/playlist-client.service';
import { PlaylistProvider } from './playlist-provider.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [PlaylistComponent, PlaylistCardComponent, PlaylistCollectionComponent],
  exports: [PlaylistComponent],
  providers: [PlaylistClient, PlaylistProvider]
})
export class PlaylistModule {}
