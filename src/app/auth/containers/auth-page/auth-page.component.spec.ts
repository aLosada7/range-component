import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthPageComponent } from './auth-page.component';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateTestingModule } from '../../../testing/translate-testing.module';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
        declarations: [ AuthPageComponent ],
        imports: [
            SharedModule,
            TranslateTestingModule,
            RouterTestingModule.withRoutes([])
        ],
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
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // a la espera de check routerlinks
});
