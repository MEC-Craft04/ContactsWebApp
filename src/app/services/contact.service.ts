import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { contactGetAll } from '../models/contactGetAll';
import { QueryBuilder } from 'odata-query-builder';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  path: string = "https://localhost:7035/api/Contact";
  contacts$: BehaviorSubject<contactGetAll[]> = new BehaviorSubject<contactGetAll[]>([]);

  filter: QueryBuilder = new QueryBuilder();

  constructor(private _http: HttpClient) { }

  getAll() {
    this._http.get<contactGetAll[]>(this.path + this.filter.toQuery()).subscribe(contacts => {
      this.contacts$.next(contacts);
    });
  }
}
