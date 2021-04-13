import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DxFormComponent } from 'devextreme-angular';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs';



const GET_EPISODE_BY_ID = gql`
query($episodeId: ID!) {
  episodesByIds(ids: [$episodeId]) {
      id
      name
      air_date
      episode
      characters {
        name
      }
  }
}
  `;

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit {
  episodeId:any;
  form: FormGroup;

  id: string;
  name: string;
  date:string;
  episode: string;

  idControl: AbstractControl;
  nameControl: AbstractControl;
  dateControl: AbstractControl;
  episodeControl: AbstractControl;

  

  buttonOptions: any = {
    text: "Register",
    type: "success",
    useSubmitBehavior: true
}

    private routeSubscription: Subscription
    private querySubscription: Subscription
  constructor( private apollo: Apollo, private route: ActivatedRoute, private router: Router ) {}
  
  ngOnInit() {

    this.routeSubscription = this.route.params.subscribe(params=>this.id=params['id'])
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
          this.id = queryParam['id'];
      }
  );

    this.apollo.watchQuery<any> ({
      query: GET_EPISODE_BY_ID,
      variables: {
        "episodeId": this.id
      }
    }).valueChanges.subscribe((result: any) => {
      this.episodeId = result.data.episodesByIds;
      for(let item of this.episodeId) {
        this.form = new FormGroup({
          id: new FormControl(item.id, Validators.compose([Validators.required])),
          name: new FormControl(item.name, Validators.compose([Validators.required])),
          date: new FormControl(item.air_date, Validators.compose([Validators.required])),
          episode: new FormControl(item.episode, Validators.compose([Validators.required])),
          
          
        });
          this.idControl = this.form.controls['id'];
          this.nameControl = this.form.controls['name'];
          this.dateControl = this.form.controls['date'];
          this.episodeControl = this.form.controls['episode'];
        
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    } else
    this.router.navigate(['']);
  }


}

