import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromAuth from '../../reducers';
import { AuthPageActions } from '../../actions';

@Component({
  selector: 'tms-email-verification-page',
  templateUrl: './email-verification-page.component.html'
})
export class EmailVerificationPageComponent implements OnInit, OnDestroy {

    params: Params;

    verificationLoading$: Observable<boolean>;
    error$ = this.store.pipe(select(fromAuth.getSignUpPageError));

    subscriptionLoadData: Subscription;

    constructor(private route: ActivatedRoute,
        private store: Store<fromAuth.State>) {
            this.verificationLoading$ = this.store.select(fromAuth.getLoading);
    }

    ngOnInit(): void {
        console.log(this.route.queryParams)
        this.subscriptionLoadData = this.route.queryParams.subscribe(params => {
            this.params = params;
            if(this.params['evldr']) {
                // send action to update email
                this.store.dispatch(new AuthPageActions.EmailConfirmation(this.params['evldr']));
            }
        });
    }

    ngOnDestroy(): void {
        if (this.subscriptionLoadData) this.subscriptionLoadData.unsubscribe();
    }

}
