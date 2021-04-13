import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeInfoComponent } from './episode-info/episode-info.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxTagBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    EpisodesListComponent,
    EpisodeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxTagBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
