import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { LoadPlaylists } from '../actions/load-playlists.action';
import { PlaylistResponse } from '../api/models/playlist-response';
import { PlaylistClient } from '../api/playlist-client.service';
import { PlaylistStateModel } from './playlist-state.model';
import { PlaylistState } from './playlist.state';

describe('Playlist State', () => {
  let store: Store;
  let playlistsApiResponse$: ReplaySubject<PlaylistResponse>;

  beforeEach(
    waitForAsync(() => {
      playlistsApiResponse$ = new ReplaySubject(1);

      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([PlaylistState])],
        providers: [
          {
            provide: PlaylistClient,
            useValue: {
              playlists$: playlistsApiResponse$.asObservable().pipe(first()),
            },
          },
        ],
      }).compileComponents();

      store = TestBed.inject(Store);
    })
  );

  it('should load the playlists', async () => {
    store.reset({ playlist: [] });

    playlistsApiResponse$.next({
      somePlaylists: {
        name: 'Some playlists',
        content: [
          {
            artwork: 'https://some.artwork.com',
            curator_name: 'Some name',
            id: 'some_id',
            kind: 'playlist',
            name: 'Some playlist',
            url: 'https://some.playlist.com',
          },
        ],
      },
    });

    const expectedState: PlaylistStateModel = [
      {
        name: 'Some playlists',
        playlists: [
          {
            artworkImageUrl: 'https://some.artwork.com',
            curatorName: 'Some name',
            id: 'some_id',
            name: 'Some playlist',
            url: 'https://some.playlist.com',
          },
        ],
      },
    ];

    await store.dispatch(new LoadPlaylists()).toPromise();

    expect(store.selectSnapshot(PlaylistState)).toEqual(expectedState);
  });
});
