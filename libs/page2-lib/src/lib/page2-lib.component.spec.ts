import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2LibComponent } from './page2-lib.component';

describe('Page2LibComponent', () => {
  let component: Page2LibComponent;
  let fixture: ComponentFixture<Page2LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2LibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
