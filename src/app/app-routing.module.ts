import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PlaylistsPageComponent } from './playlist/pages/playlists/playlists-page.component';

@Injectable()
export class AuthGuard implements CanActivate {
  public canActivate = () => of(true).pipe(delay(750));
}

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'playlists',
      },
      {
        path: 'playlists',
        component: PlaylistsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
