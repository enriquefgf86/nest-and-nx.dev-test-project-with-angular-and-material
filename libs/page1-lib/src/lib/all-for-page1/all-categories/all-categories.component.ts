import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ChuckItemResult,
  ChuckSearchResult,
} from '@chuck-norris-front/interfaces';
import { GlobalAppState } from '@chuck-norris-front/redux';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ModalJokeComponent } from './modal-joke/modal-joke.component';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { Service1Service } from './services-page1/service1.service';
import * as actions from '@chuck-norris-front/redux';
import { Subscription } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'chuck-norris-front-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css'],
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  allCategories: String[] = [];
  aJokeForm: FormGroup;
  searchForm: FormGroup;
  jokeSelectedByCategory: ChuckItemResult;
  randomJoke: ChuckItemResult;
  suscriptor: Subscription = new Subscription();

  searchResult: ChuckSearchResult;
  value = 'Clear me';

  constructor(
    private service: Service1Service,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public store: Store<GlobalAppState>,
    public actions$: Actions
  ) {
    this.aJokeForm = this.formBuilder.group({
      categories: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.getAllCategories();
  }

  ngOnDestroy(): void {
    this.suscriptor.unsubscribe();
  }

  getAllCategories() {
    // await this.service
    //   .getAllCategoriesService()
    //   .toPromise()
    //   .then(async (result: any) => {
    //     this.allCategories = await result;
    //     console.log(this.allCategories);
    //   });
    // return this.allCategories;
    this.store.dispatch(actions.getAllCategoriesFlag());
    // this.suscriptor.add(
    this.actions$
      .pipe(ofType(actions.gettingAllCategories), take(1))
      .subscribe(() => {
        this.store
          .select('chuckReducers')
          .pipe(take(1))
          .subscribe((result) => {
            console.log(result);
            this.allCategories = Object.values(result.allCategoriesRetrieved);
            console.log(this.allCategories);
          });
      });
    // this.store
    //   .select('chuckReducers')
    //   .pipe(take(1))
    //   .subscribe((result) => {
    //     console.log(result);
    //     this.allCategories = Object.values(result.allCategoriesRetrieved);
    //     console.log(this.allCategories);
    //   });
    // );
    return this.allCategories;
  }

  async getJoke() {
    let category: string = await this.aJokeForm.value.categories;

    this.store.dispatch(
      actions.getRandomJokeByCategoryFlag({ category: category })
    );

    this.store
      .select('chuckReducers')
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data.jokeByCategory);
        this.jokeSelectedByCategory = data.jokeRandomRetrieved;

        if (this.jokeSelectedByCategory) {
          this.openModal(this.jokeSelectedByCategory);
        }
      });
    // await this.service
    //   .getAJokeByCategory(category)
    //   .toPromise()
    //   .then((result) => {
    //     console.log(result);
    //     this.jokeSelectedByCategory = result;
    //   });
    // console.log(this.jokeSelectedByCategory);

    // const dialogRef = this.dialog.open(ModalJokeComponent, {
    //   width: '250px',
    //   data: { joke: this.jokeSelectedByCategory },
    // });

    // dialogRef
    //   .afterClosed()
    //   .pipe(take(1))
    //   .subscribe((result) => {
    //     console.log('The dialog was closed');
    //   });
  }

  async search(value) {
    console.log(value);
    await this.service
      .getSearchJokeBy(value)
      .toPromise()
      .then((result) => {
        this.searchResult = result;
      });

    const dialogRef = this.dialog.open(ModalSearchComponent, {
      width: '250px',
      data: { search: this.searchResult },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  getJokeRandom() {
    // await this.service.getAJokeRandom().toPromise().then(result=>{
    //   console.log(result);
    //   this.randomJoke=result

    // })

    this.store.dispatch(actions.getRandomJokeFlag());
    this.actions$
      .pipe(ofType(actions.getRandomJoke), take(1))
      .subscribe((result) => {
        this.store
          .select('chuckReducers')
          .pipe(take(1))
          .subscribe((data) => {
            console.log(data.jokeRandomRetrieved);
            this.randomJoke = data.jokeRandomRetrieved;
            if (this.randomJoke) {
              this.openModal(this.randomJoke);
            }
          });
      });
    // this.store
    //   .select('chuckReducers')
    //   .pipe(take(1))
    //   .subscribe((data) => {
    //     console.log(data.jokeRandomRetrieved);
    //     this.randomJoke = data.jokeRandomRetrieved;
    //     if (this.randomJoke) {
    //       this.openModal(this.randomJoke);
    //     }
    //   });
  }

  openModal(data) {
    const dialogRef = this.dialog.open(ModalJokeComponent, {
      width: '250px',
      data: { joke: data },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        console.log('The dialog was closed');
        this.store.dispatch(actions.resetModal());
      });
  }
}
