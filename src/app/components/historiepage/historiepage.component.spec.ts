import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriepageComponent } from './historiepage.component';

describe('HistoriepageComponent', () => {
  let component: HistoriepageComponent;
  let fixture: ComponentFixture<HistoriepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
