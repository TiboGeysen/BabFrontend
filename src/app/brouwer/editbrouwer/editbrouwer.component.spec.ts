import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrouwerComponent } from './editbrouwer.component';

describe('EditbrouwerComponent', () => {
  let component: EditbrouwerComponent;
  let fixture: ComponentFixture<EditbrouwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbrouwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbrouwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
