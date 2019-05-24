import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbierComponent } from './editbier.component';

describe('EditbierComponent', () => {
  let component: EditbierComponent;
  let fixture: ComponentFixture<EditbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
