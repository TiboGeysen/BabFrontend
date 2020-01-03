import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailaddbierComponent } from './detailaddbier.component';

describe('DetailaddbierComponent', () => {
  let component: DetailaddbierComponent;
  let fixture: ComponentFixture<DetailaddbierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailaddbierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailaddbierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
