import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from './post';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {


  private BASE_URL="http://localhost:8080";
  private POST_FEEDBACK_URL=`${this.BASE_URL}/queries`;
  private POST_SUBSCRIBER_URL=`${this.BASE_URL}/subscribers`;
    

  constructor(private http:HttpClient) { }


  postfeedback(feedback:any): Observable<any>{
   
    return this.http.post(this.POST_FEEDBACK_URL,feedback,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });  
  }


  postSubscriber(subscriber:any): Observable<any>{
    
     return this.http.post(this.POST_SUBSCRIBER_URL,subscriber,{
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     });  
   }

  addUser(formData:any):Observable<any>{
    return this.http.post(this.BASE_URL+"/users",formData);
  }

  getUserByID(id:number):Observable<any>{
    return this.http.get(this.BASE_URL+"/user/"+id);
  }

  getUserByEmail(email:string):Observable<any>{
    return this.http.get(this.BASE_URL+"/users/"+email);
  }
  updateUser(formData:any,id:number):Observable<any>{
    return this.http.put(this.BASE_URL+"/users/"+id,formData);
  }
  updateUserByFormData(formData:any,id:number):Observable<any>{
    return this.http.put(this.BASE_URL+"/user/"+id,formData);
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.BASE_URL+"/users/"+id);
  }


  checkSubscription(email:string):Observable<any>{
    return this.http.get(this.POST_SUBSCRIBER_URL+"/"+email);
  }




  getPosts():Observable<post[]>{
    return this.http.get<post[]>(this.BASE_URL+"/posts");
  }
  getPostByID(id:number):Observable<post>{
    return this.http.get<post>(this.BASE_URL+"/posts/"+id);
  }
  addPost(formData:any):Observable<post>{
    return this.http.post<post>(this.BASE_URL+"/posts",formData);
  }
  updatePost(formData:any,id:number):Observable<post>{
    return this.http.put<post>(this.BASE_URL+"/posts/"+id,formData);
  }
  updatePostByFormData(formData:any,id:number):Observable<post>{
    return this.http.put<post>(this.BASE_URL+"/post/"+id,formData);
  }
  deletePost(id:Number):Observable<any>{
    return this.http.delete(this.BASE_URL+"/posts/"+id);
  }
  

}
