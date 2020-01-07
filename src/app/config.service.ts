import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

const httpOptions={
  headers: new HttpHeaders({'Content-type':'application/json'})
}; 

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

  getPost():Observable<post[]>{
    return this.http.get<any>(this.apiUrl).pipe(
    tap(post=>{console.log(post)}),
    catchError(this.hendleError('Get Post',[]))
    );

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

  getPostByID(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(post=>{console.log(post)}),
      catchError(this.hendleError('Get Post By ID',[]))
      );
  }

  updatePost(formData:NgForm):Observable<post>{
    return this.http.put<any>(`${this.apiUrl}`,formData,httpOptions).pipe(
      tap(post=>{console.log(post)}),
      catchError(this.hendleError('Update Post',[]))
      );
  }

  addPost(formData:NgForm):Observable<post>{
    return this.http.post<any>(`${this.apiUrl}`,formData,httpOptions).pipe(
      tap(post=>{console.log(post)}),
      catchError(this.hendleError('Add Post',[]))
      );
  }

}
