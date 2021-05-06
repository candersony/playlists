import { Playlist } from './playlist';

export interface PlaylistCollection {
  readonly name: string;
  readonly content: Playlist[];
}
