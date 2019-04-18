import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementenpageComponent } from './evenementenpage.component';

describe('EvenementenpageComponent', () => {
  let component: EvenementenpageComponent;
  let fixture: ComponentFixture<EvenementenpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementenpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
