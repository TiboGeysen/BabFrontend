import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbeheerlijstComponent } from './adminbeheerlijst.component';

describe('AdminbeheerlijstComponent', () => {
  let component: AdminbeheerlijstComponent;
  let fixture: ComponentFixture<AdminbeheerlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbeheerlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbeheerlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
