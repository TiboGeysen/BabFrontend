import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieraddComponent } from './bieradd.component';

describe('BieraddComponent', () => {
  let component: BieraddComponent;
  let fixture: ComponentFixture<BieraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
