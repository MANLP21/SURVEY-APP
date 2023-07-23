import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile : Profile[]=[];
  constructor(private storage: StorageService) { 
    this.init();
  }

  init(){
    this.storage.get("profile")?.then((_profile : Profile[]) => {
      this.profile=_profile;
    })
  }

  public saveProfile(profile: Profile){
    this.profile[0]=profile;
    this.storage.set("profile", this.profile)
  }

  public profileList() : Promise <Profile[]>{
    return Promise.resolve(this.profile);
  }
}
