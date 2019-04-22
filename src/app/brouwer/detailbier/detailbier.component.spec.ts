import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbierComponent } from './detailbier.component';

describe('DetailbierComponent', () => {
  let component: DetailbierComponent;
  let fixture: ComponentFixture<DetailbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
