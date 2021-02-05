import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCreatePageComponent } from './password-create-page.component';

describe('PasswordCreatePageComponent', () => {
  let component: PasswordCreatePageComponent;
  let fixture: ComponentFixture<PasswordCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
