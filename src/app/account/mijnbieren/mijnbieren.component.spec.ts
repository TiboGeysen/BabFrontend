import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnbierenComponent } from './mijnbieren.component';

describe('MijnbierenComponent', () => {
  let component: MijnbierenComponent;
  let fixture: ComponentFixture<MijnbierenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnbierenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnbierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
