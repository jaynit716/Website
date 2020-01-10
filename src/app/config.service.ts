import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl='api/posts';

  constructor(private http:HttpClient) { }

  private hendleError<T>(operation='operation',result?:T){
    return (error:any): Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  
  
  getSettings(database:string,id?:string):Observable<any>{
    let uid=id||null;
    let url:string;
    uid !== null? url=`api/${database}/${id}`: url=`api/${database}`;
    return this.http.get<any>(url).pipe(
    tap(settings=>{}),
    catchError(this.hendleError('Get Settings',[]))
    );

  }

  
}
