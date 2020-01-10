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

  selectedImage:any;
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
      'image':["",Validators.required]          
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
            bio:user.bio,
            file:user.file
          }
        );
      }
    );}

  updateUser(fdata:NgForm,id:number){

    if(this.selectedImage!=null){

      const formData= new FormData();
      formData.append('fName',this.userEditForm.controls.fName.value);
      formData.append('lName',this.userEditForm.controls.lName.value);
      formData.append('email',this.userEditForm.controls.email.value);
      formData.append('pass',this.userEditForm.controls.pass.value);
      formData.append('bio',this.userEditForm.controls.bio.value);
      formData.append('role',this.userEditForm.controls.role.value);
      formData.append('file',this.userEditForm.get('file').value,this.selectedImage.name);
      this.api.updateUser(formData,id).subscribe(
        () => {
          this.updateUserInCookie(id);
        }
      );
    }
    else{
      console.log(fdata);
      this.api.updateUserByFormData(fdata,id).subscribe(
        () => {
          this.updateUserInCookie(id);
        }
      );
    }

  }

  goBack(){
    this.location.back();
  }

  onSelected(event){
    if(event.target.files.length>0){
      this.selectedImage = event.target.files[0];
      this.userEditForm.controls.image.setValue(this.selectedImage.name);
      this.userEditForm.get('file').setValue(this.selectedImage);
    }
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
