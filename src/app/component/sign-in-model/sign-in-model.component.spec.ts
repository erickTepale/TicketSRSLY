import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInModelComponent } from './sign-in-model.component';

describe('SignInModelComponent', () => {
  let component: SignInModelComponent;
  let fixture: ComponentFixture<SignInModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
