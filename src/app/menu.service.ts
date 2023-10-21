import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseURL: string = 'http://localhost:5001';

  constructor(private httpClient: HttpClient) {}

  getMenuItems(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/menuitems`).pipe(
      catchError(error => {
        console.error('Error fetching menu items:', error);
        return throwError('Failed to fetch menu items. Please try again later.');
      })
    );
  }
}
