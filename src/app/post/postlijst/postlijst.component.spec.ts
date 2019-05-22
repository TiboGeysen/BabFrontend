import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlijstComponent } from './postlijst.component';

describe('PostlijstComponent', () => {
  let component: PostlijstComponent;
  let fixture: ComponentFixture<PostlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
