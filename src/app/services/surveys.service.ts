import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  private surveys : Survey[]=[];
  constructor(private storage: StorageService) { 
    this.init();
  }

  init(){
    this.storage.get("surveys")?.then((_surveys : Survey[]) => {
      this.surveys=_surveys;
    })
  }

  public saveSurvey(survey: Survey){
    this.surveys.push(survey);
    this.storage.set("surveys", this.surveys)
  }

  public surveyList() : Promise <Survey[]>{
    return Promise.resolve(this.surveys);
  }
}
