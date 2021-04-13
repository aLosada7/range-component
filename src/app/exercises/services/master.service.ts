import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRange } from '../models/range.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

    constructor(private http: HttpClient) { }

    getRandomRangeValues(): Observable<IRange> {
        return this.http.get<IRange>(`${environment.apiUrl}/randomValues`);
    }

    getFixedRangeValues(): Observable<number[]> {
        return this.http.get<number[]>(`${environment.apiUrl}/fixedValues`);
    }
}
