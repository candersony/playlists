import { PlaylistCollection as ApiPlaylistCollection } from '../api/models/playlist-collection';
import { Playlist, createPlaylist } from './playlist';

export interface PlaylistCollection {
  readonly name: string;
  readonly playlists: Playlist[];
}

export const createPlaylistCollection = (
  collection: ApiPlaylistCollection
): PlaylistCollection => ({
  name: collection.name,
  playlists: collection.content.map(createPlaylist),
});
