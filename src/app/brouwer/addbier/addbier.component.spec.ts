import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbierComponent } from './addbier.component';

describe('AddbierComponent', () => {
  let component: AddbierComponent;
  let fixture: ComponentFixture<AddbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
