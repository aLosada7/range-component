import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { PasswordCreatePageComponent } from './password-create-page.component';

describe('PasswordCreatePageComponent', () => {
  let component: PasswordCreatePageComponent;
  let fixture: ComponentFixture<PasswordCreatePageComponent>;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
    declarations: [ PasswordCreatePageComponent ],
    imports: [ SharedModule ],
    providers: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        provideMockStore({ initialState }),
        { provide: ComponentFixtureAutoDetect, useValue: true }
    ],
    schemas: [NO_ERRORS_SCHEMA]
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
