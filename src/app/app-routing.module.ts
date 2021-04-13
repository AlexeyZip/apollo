import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { EpisodeInfoComponent } from './episode-info/episode-info.component';

const routes: Routes = [
    {
        path: '', component: EpisodesListComponent
    },
    {
        path: 'episode', component: EpisodeInfoComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}