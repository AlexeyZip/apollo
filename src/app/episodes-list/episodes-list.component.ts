import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

const GET_EPISODE_PAGE = gql`
query($episodePage: Int) {
  episodes(page: $episodePage) {
    info {
      count
      pages 
    }
    results {
      id
      name
      air_date
      episode
      characters {
        id
      }
    }
  }
}
  `;

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  allEpisodes: any[]

  episode

  constructor( private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.apollo.watchQuery ({
      query: GET_EPISODE_PAGE
    }).valueChanges.subscribe((result: any) => {
      this.allEpisodes = result.data.episodes.results;
    })
  }
 
}
