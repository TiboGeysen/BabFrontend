import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouwerbeheerComponent } from './brouwerbeheer.component';

describe('BrouwerbeheerComponent', () => {
  let component: BrouwerbeheerComponent;
  let fixture: ComponentFixture<BrouwerbeheerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrouwerbeheerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouwerbeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
