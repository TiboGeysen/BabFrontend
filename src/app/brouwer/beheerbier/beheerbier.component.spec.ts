import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerbierComponent } from './beheerbier.component';

describe('BeheerbierComponent', () => {
  let component: BeheerbierComponent;
  let fixture: ComponentFixture<BeheerbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
