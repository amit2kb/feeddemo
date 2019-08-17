import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivefeedComponent } from './addlivefeed.component';

describe('AddlivefeedComponent', () => {
  let component: AddlivefeedComponent;
  let fixture: ComponentFixture<AddlivefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlivefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlivefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
