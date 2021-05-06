import { PlaylistCollection as ApiPlaylistCollection } from '../api/models/playlist-collection';
import { PlaylistResponse } from '../api/models/playlist-response';
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

export const toPlaylistCollections = (response: PlaylistResponse) =>
  Object.values(response).map(createPlaylistCollection);
