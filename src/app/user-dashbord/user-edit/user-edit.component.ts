import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  selectedImage:File=null;
  userEditForm:FormGroup;
  id:number;

    constructor(
      private fb:FormBuilder,
      private route:ActivatedRoute,
      private location: Location,
      private api:ApiCallService
      ) { }
  
  ngOnInit() {
    this.userEditForm= this.fb.group({
      'id':[null,Validators.required],
      'fName':[null,Validators.required],
      'lName':[null,Validators.required],
      'email':[null,[Validators.required,Validators.email]],
      'pass':[null,[Validators.required,Validators.minLength(8)]],
      'bio':[null,Validators.required],
      'role':[null,Validators.required],
      file:[''],
      'image':["../user-images/default-user.png",Validators.required]          
    });
    this.id= this.route.snapshot.params['id'] || null;
    if(this.id){
      this.getUserById(this.id);
    }
  }
  

  getUserById(id:number){

    this.api.getUserByID(id).subscribe(
      user=>{
        this.userEditForm.setValue(
          {
            id:user.id,
            fName:user.fName,
            lName:user.lName,
            email:user.email,
            pass:user.pass,
            role:user.role,
            image:user.image,
            bio:user.bio
          }
        );}
    );}

  updateUser(formData:NgForm,id:number){
    if(this.selectedImage!=null){
    }
    this.api.updateUser(formData,id).subscribe(
      () => {
        this.updateUserInCookie(id);
      }
    );
  }

  goBack(){
    this.location.back();
  }

  onSelected(event){
    this.selectedImage=<File>event.target.files[0];
    console.log(this.selectedImage.name);
  }

  updateUserInCookie(id:number){

    return this.api.getUserByID(id).subscribe(
      res=>{
        if(res==null){
          alert("Id does not Exist!!");
        }
        else if(res.id==id){
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.goBack();
        }
      }
    );
  }

}
