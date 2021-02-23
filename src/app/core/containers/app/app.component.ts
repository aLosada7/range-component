import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../auth/reducers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'tms-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

    title = 'learning-with-alvaro-web';

    loggedIn$: Observable<boolean>;

    constructor(
        private store: Store<fromRoot.State>,
        private router: Router,
        private translate: TranslateService) {
        this.loggedIn$ = this.store.pipe(select(fromRoot.getLoggedIn));
    }

    ngOnInit() {
        this.translate.setDefaultLang('en');
    }

    showNav(): boolean {
        return !this.router.url.includes("identity");
    }
}
