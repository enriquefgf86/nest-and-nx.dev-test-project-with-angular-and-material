import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1LibComponent } from './page1-lib.component';

describe('Page1LibComponent', () => {
  let component: Page1LibComponent;
  let fixture: ComponentFixture<Page1LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1LibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
