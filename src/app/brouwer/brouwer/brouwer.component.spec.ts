import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouwerComponent } from './brouwer.component';

describe('BrouwerComponent', () => {
  let component: BrouwerComponent;
  let fixture: ComponentFixture<BrouwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrouwerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
