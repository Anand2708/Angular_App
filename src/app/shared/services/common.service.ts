import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  showSpinner(flag: boolean) {
    if (flag) {
      this.spinner.show(undefined, {
        fullScreen: true,
        type: "ball-clip-rotate-pulse"
      });
    }
  }
  hideSpinner() {
    this.spinner.hide();
  }


  GetService(url: string, showSpinner: boolean = false): Observable<any> {
    this.showSpinner(showSpinner);
    return this.http.get(environment.api.baseUrl + url).pipe(
      tap(response => console.log('Entity : ', JSON.stringify(response))),
      map((response) => {
        this.hideSpinner();
        return response;
      }),
      catchError(err => {
        console.error(err);
        this.hideSpinner();
        return throwError(err);
      })
    )

  }

  PostService(url: string, data: any, showSpinner: boolean = false): Observable<any> {
    this.showSpinner(showSpinner);
    return this.http.post(environment.api.baseUrl + url, data).pipe(
      map((response) => {
        this.hideSpinner();
        return response
      })
    )
  }


  putService(url: string, data: any, showSpinner: boolean = false) {
    this.showSpinner(showSpinner);
    return this.http.put(environment.api.baseUrl + url, data).pipe(
      map((response) => {
        this.hideSpinner();
        return response
      })
    )
  }

  DeleteService(url: string, showSpinner: boolean = false) {
    this.showSpinner(showSpinner);
    return this.http.delete(environment.api.baseUrl + url).pipe(
      map((response) => {
        this.hideSpinner();
        return response
      })
    )
  }

}
