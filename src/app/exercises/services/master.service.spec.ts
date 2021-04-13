import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpRequestInterceptorMock } from '../interceptors/httpInterceptorMock.interceptor';
import { MasterService } from './master.service';
import { environment } from 'src/environments/environment';
import { mockRandomValues } from './mockRandomValues';
import { mockFixedValues } from './mockFixedValues';

describe('Master Service', () => {
    let httpTestingController: HttpTestingController
    let service: MasterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                MasterService,
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MasterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    describe('random range values', () => {
        it('expect min & max values data', () => {
            service.getRandomRangeValues().subscribe((rangeValues: any) => {
                expect(rangeValues).not.toBe(null);
                expect(JSON.stringify(rangeValues)).toEqual(JSON.stringify(mockRandomValues));
            });

            const req = httpTestingController.expectOne(`${environment.apiUrl}/randomValues`);
            req.flush(mockRandomValues);
        })
    })

    describe('fixed range values', () => {
        it('expect fixed values data', () => {
            service.getFixedRangeValues().subscribe((values: any) => {
                expect(values).not.toBe(null);
                expect(JSON.stringify(values)).toEqual(JSON.stringify(mockFixedValues));
            });

            const req = httpTestingController.expectOne(`${environment.apiUrl}/fixedValues`);
            req.flush(mockFixedValues);
        })
    })
});
