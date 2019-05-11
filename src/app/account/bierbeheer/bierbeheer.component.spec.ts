import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierbeheerComponent } from './bierbeheer.component';

describe('BierbeheerComponent', () => {
  let component: BierbeheerComponent;
  let fixture: ComponentFixture<BierbeheerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierbeheerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierbeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
