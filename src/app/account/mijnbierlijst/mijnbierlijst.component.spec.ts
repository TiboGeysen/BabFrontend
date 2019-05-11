import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnbierlijstComponent } from './mijnbierlijst.component';

describe('MijnbierlijstComponent', () => {
  let component: MijnbierlijstComponent;
  let fixture: ComponentFixture<MijnbierlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnbierlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnbierlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
