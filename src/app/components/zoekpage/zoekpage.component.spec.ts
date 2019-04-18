import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekpageComponent } from './zoekpage.component';

describe('ZoekpageComponent', () => {
  let component: ZoekpageComponent;
  let fixture: ComponentFixture<ZoekpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
