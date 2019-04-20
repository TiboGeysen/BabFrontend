import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierComponent } from './bier.component';

describe('BierComponent', () => {
  let component: BierComponent;
  let fixture: ComponentFixture<BierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
