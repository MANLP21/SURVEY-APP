import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileList : Profile[] = [];

  public currentProfile : Profile = {
    name:"",
    birthday:"",
    gender: "",
    height: "",
    weight: "",
    email:"",
    phone_number:""
  }

  public isModalOpen :  boolean = false;

  constructor(private profileService :  ProfileService) { }

  ngOnInit() {
    this.loadProfile();
  }

  public loadProfile(){
    this.profileService.profileList().then(list => {
      this.profileList = list;
    })
  }

  public showProfileForm(){

    if(this.profileList.length!==0)
    {
      this.currentProfile=this.profileList[0];
    }
  
    

    this.isModalOpen=true; 
  }

  public cancel(){
    this.isModalOpen=false; 
  }

  public save(){
    this.profileService.saveProfile(this.currentProfile);
    this.loadProfile();
    this.isModalOpen=false; 
  }

}
