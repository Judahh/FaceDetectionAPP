import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';

import { Utils } from './../../../../core/utils/Utils';
import { Languages } from './../../../../core/languages/Languages';
import { ModelLanguages } from './../../../../core/languages/ModelLanguages';

import { ModelDivisorBlock } from './../../common/divisorBlock/ModelDivisorBlock';
import { ModelDivisor } from './../../common/divisorBlock/divisor/ModelDivisor';
import { ModelSubDivisor } from './../../common/divisorBlock/divisor/subDivisor/ModelSubDivisor';

import { ModelInformation } from './../../common/item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../../common/item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../../common/item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../../common/item/colorEffect/ModelColorEffect';
import { ModelItem } from './../../common/item/ModelItem';

import { ModelHome } from './ModelHome';
import { ModelHomeInformation } from './ModelHomeInformation';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPageHome implements OnInit {
  modelHome:ModelHome;
  modelHomeInformation:ModelHomeInformation;
  modelLanguages:ModelLanguages;
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;
  currentWidth:number;

  title(){
    return this.modelHomeInformation.title;
  }

  ngOnInit() {
    this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.modelHome=new ModelHome();
    this.modelLanguages=new ModelLanguages();
    this.modelHomeInformation=new ModelHomeInformation();

    this.refresh();
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    // console.log("resizeWHO");
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=event.target.innerWidth;
      this.refresh();
    }

    if((this.currentWidth>=500 && event.target.innerWidth<500)||
       (this.currentWidth<500 && event.target.innerWidth>=500)||
       (this.currentWidth>=900 && event.target.innerWidth<900)||
       (this.currentWidth<900 && event.target.innerWidth>=900)){
      this.currentWidth=event.target.innerWidth;
      this.refresh();
    }
  }

  refresh(){
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=window.innerWidth;
    }

    var type:string="";

    if(this.currentWidth<900){
      type="SmallerThan900";
    }

    if(this.currentWidth<500){
      type="SmallerThan500";
    }

    //console.log("type:"+type);

    this.getPageService();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService(type);
  }

  private getArrayModelDivisorBlock(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock=arrayModelDivisorBlock;
    // this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.title()));
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].videoLink.source = this.modelHome.videoLink;
  }

  private getPageService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      item => this.modelHome=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getInformationService(){
    var errorMessage="";

    this.serviceJSON.getObservable('languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelHomeInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlockService(type:string){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock'+type).subscribe(
      item => this.getArrayModelDivisorBlock(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


