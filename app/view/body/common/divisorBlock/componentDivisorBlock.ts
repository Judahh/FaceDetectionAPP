import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelDivisorBlock } from './ModelDivisorBlock';
import { ModelSubDivisor } from './divisor/subDivisor/ModelSubDivisor';
import { ModelDivisor } from './divisor/ModelDivisor';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisorBlock implements OnInit {
  @Input() modelDivisorBlock: ModelDivisorBlock;
  @Input() dataModel: Array<any>;
  @Input() subDataModel: Array<any>;

  ngOnInit() {
    this.initialization();
  }

  float(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.float==null||this.modelDivisorBlock.divisor.float==undefined||this.modelDivisorBlock.divisor.float==""){
      return "";
    }
    return "float: "+this.modelDivisorBlock.divisor.float+";";
  }

  top(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.top==null||this.modelDivisorBlock.divisor.top==undefined||this.modelDivisorBlock.divisor.top==""){
      return "";
    }
    return "top: "+this.modelDivisorBlock.divisor.top+";";
  }

  left(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.left==null||this.modelDivisorBlock.divisor.left==undefined||this.modelDivisorBlock.divisor.left==""){
      return "";
    }
    return "left: "+this.modelDivisorBlock.divisor.left+";";
  }

  right(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.right==null||this.modelDivisorBlock.divisor.right==undefined||this.modelDivisorBlock.divisor.right==""){
      return "";
    }
    return "right: "+this.modelDivisorBlock.divisor.right+";";
  }

  position(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.position==null||this.modelDivisorBlock.divisor.position==undefined||this.modelDivisorBlock.divisor.position==""){
      return "";
    }
    return "position: "+this.modelDivisorBlock.divisor.position+";";
  }

  height(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.height==null||this.modelDivisorBlock.divisor.height==undefined||this.modelDivisorBlock.divisor.height==""){
      return "";
    }
    return "height: "+this.modelDivisorBlock.divisor.height+";";
  }

  width(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined||this.modelDivisorBlock.divisor.width==null||this.modelDivisorBlock.divisor.width==undefined||this.modelDivisorBlock.divisor.width==""){
      return "";
    }
    return "width: "+this.modelDivisorBlock.divisor.width+";";
  }

  display(){
    if(this.modelDivisorBlock.divisor==null||this.modelDivisorBlock.divisor==undefined){
      return "";
    }
    if(this.modelDivisorBlock.divisor.display==null||this.modelDivisorBlock.divisor.display==undefined||this.modelDivisorBlock.divisor.display==""){
      return "display: flex;";
    }
    return "display: "+this.modelDivisorBlock.divisor.display+";";
  }

  style(){
    return this.display()
    + this.float()
    + this.top()
    + this.left()
    + this.right()
    + this.position()
    + this.height()
    + this.width()
    + this.display();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

}


