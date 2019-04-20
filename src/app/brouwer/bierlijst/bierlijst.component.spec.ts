import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierlijstComponent } from './bierlijst.component';

describe('BierlijstComponent', () => {
  let component: BierlijstComponent;
  let fixture: ComponentFixture<BierlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
