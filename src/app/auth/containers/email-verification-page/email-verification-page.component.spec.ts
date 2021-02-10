import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { EmailVerificationPageComponent } from './email-verification-page.component';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('EmailVerificationPageComponent', () => {
  let component: EmailVerificationPageComponent;
  let fixture: ComponentFixture<EmailVerificationPageComponent>;
  let mockStore;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

        TestBed.configureTestingModule({
            declarations: [ EmailVerificationPageComponent ],
            imports: [
                SharedModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                FormsModule,
                BrowserModule,
                ReactiveFormsModule,
                provideMockStore({ initialState }),
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: ActivatedRoute, useValue: { queryParams: of({ evldr: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZGMzMHNjQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg2NzQyMn0.zGmwZivfIL-8QprXz9xWeWHzpIFyRiVG5PoESQO_Hqk" }) }}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailVerificationPageComponent);
        component = fixture.componentInstance;
        mockStore = fixture.debugElement.injector.get(Store);
        fixture.detectChanges();
    });

    it('gets param', () => {
        const dispatchAction = jest.spyOn(mockStore, 'dispatch');
        component.ngOnInit();

        expect(dispatchAction).toHaveBeenCalled();
    })
});
