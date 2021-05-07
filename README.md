# Playlists

This is a simple Angular 11 application that fetches and displays playlists.

The app has been broken down into feature/domain modules to ensure a good separation of concerns. Common UI items ([card](src/app/shared/components/card), [link](src/app/shared/components/link)) have been placed into a [Shared Module](src/app/shared) anticipating reuse. Items specific to Playlists have been placed together in the [Playlist module](src/app/playlist/playlist.module.ts). This includes an [API client](src/app/playlist/api) to fetch playlists, a [reactive store](src/app/playlist/store) to handle playlist actions, load the data and provide it to components, some [presentation components](src/app/playlist/components) to display the playlist data and a [page component](src/app/playlist/pages/playlists) connected to the store. This ensures items are small and specific, ensuring the structure is easy to navigate and understand, and easy to test.

[Playlist provider](src/app/playlist/playlist-provider.service.ts) was added early on to get up and running quickly. This has been replaced by the NGXS state so is no longer required and should be deleted from the codebase.
