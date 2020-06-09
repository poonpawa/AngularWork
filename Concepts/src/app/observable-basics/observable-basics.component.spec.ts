import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableBasicsComponent } from './observable-basics.component';

describe('ObservableBasicsComponent', () => {
  let component: ObservableBasicsComponent;
  let fixture: ComponentFixture<ObservableBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
