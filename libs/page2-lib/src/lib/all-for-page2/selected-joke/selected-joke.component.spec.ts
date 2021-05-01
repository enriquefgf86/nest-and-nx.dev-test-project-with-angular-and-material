import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedJokeComponent } from './selected-joke.component';

describe('SelectedJokeComponent', () => {
  let component: SelectedJokeComponent;
  let fixture: ComponentFixture<SelectedJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
