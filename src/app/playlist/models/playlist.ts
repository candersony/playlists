import { Playlist as ApiPlaylist } from '../api/models/playlist';

export interface Playlist {
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly curatorName: string;
  readonly artworkImageUrl: string;
}

export const createPlaylist = (playlist: ApiPlaylist): Playlist => ({
  artworkImageUrl: playlist.artwork,
  curatorName: playlist.curator_name,
  url: playlist.url,
  name: playlist.name,
  id: playlist.id,
});
