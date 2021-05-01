import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChuckItemResult } from '@chuck-norris-front/interfaces';
import { Service2Service } from '../service-page2/service2.service';

@Component({
  selector: 'chuck-norris-front-selected-joke',
  templateUrl: './selected-joke.component.html',
  styleUrls: ['./selected-joke.component.css'],
})
export class SelectedJokeComponent implements OnInit {
  id: string = '';
  selectedJokeChuck: ChuckItemResult;
  constructor(public route: ActivatedRoute, public service: Service2Service) {}

  async ngOnInit() {
    this.id = await this.route.snapshot.params['jokeId'];
    if (this.id) {
     await  this.selectedJoke(this.id)
        .toPromise()
        .then((result: ChuckItemResult) => {
          this.selectedJokeChuck = result;
          console.log(result);
          
        });

        console.log(this.selectedJokeChuck);
        
    }
  }

  selectedJoke(id: string) {
    return this.service.getAJokeById(id);
  }
}
