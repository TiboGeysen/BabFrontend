import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiervdmaandComponent } from './biervdmaand.component';

describe('BiervdmaandComponent', () => {
  let component: BiervdmaandComponent;
  let fixture: ComponentFixture<BiervdmaandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiervdmaandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiervdmaandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
