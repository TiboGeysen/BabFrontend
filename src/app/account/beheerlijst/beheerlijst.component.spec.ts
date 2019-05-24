import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerlijstComponent } from './beheerlijst.component';

describe('BeheerlijstComponent', () => {
  let component: BeheerlijstComponent;
  let fixture: ComponentFixture<BeheerlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
