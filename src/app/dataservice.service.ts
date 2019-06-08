import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const urlApi = 'https://jsonplaceholder.typicode.com/photos';
//const urlApi2 = 'http://localhost:8000/users';
//https://jsonplaceholder.typicode.com/albums
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'},

    )

};
@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getPhotos(): Observable<any> {
    return this.http.get(urlApi ).pipe(
      map(this.extractData));
  }

  getPhoto(id): Observable<any> {
    return this.http.get(urlApi + '/' + id).pipe(
      map(this.extractData));
  }
  getEmpList(): Observable<any> {
    return this.http.get(urlApi2 ).pipe(
      map(this.extractData));
  }

  getEmp(id): Observable<any> {
    return this.http.get(urlApi2 + '/' + id).pipe(
      map(this.extractData));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
