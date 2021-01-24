import { Component, Input, OnInit } from '@angular/core';
import { Shape } from 'src/app/classes/shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input('ifWidth') public ifWidth: number;
  @Input('ifHeight') public ifHeight: number;
  @Input('stepWidth') public stepWidth: number;
  @Input('stepHeight') public stepHeight: number;
  ifShapes: Array<Shape>;
  stepShapes: Array<Shape>;
  @Input('editorText')editorText:string;

  constructor() { }

  ngOnInit(): void {
    this.ifShapes = new Array<Shape>();
    this.stepShapes = new Array<Shape>();
    this.editorText='';
  }

  analyze(){
    let lines = this.editorText.split('\n');
    let ifFlag = false;
    for(const line of lines)
    {
      let lineStatement = line.trim();
      lineStatement=lineStatement.replace(/\{|\}|\.|\;/ig,' '); 
      lineStatement=lineStatement.replace(/( ){2,}/ig,' '); 
      lineStatement=lineStatement.trim();
      if(lineStatement.includes('if (')||line.trim().includes('if('))
      {
        ifFlag=true;
        let ifStatement = line.trim();
        ifStatement=ifStatement.replace(/(if|if +)/ig,''); 
        ifStatement=ifStatement.replace(/\(|\)|\{|\}|\./ig,' '); 
        ifStatement=ifStatement.replace(/( ){2,}/ig,' '); 
        ifStatement=ifStatement.trim();
        let tempIf = new Shape();
        tempIf.text = ifStatement;
        this.ifShapes.push(tempIf);
        console.log(ifStatement);
      }else if(lineStatement.length==0)
      {
        //lone bracket
      }else
      {
        let tempStep = new Shape();
        tempStep.text = lineStatement;
        this.stepShapes.push(tempStep);
        console.log(lineStatement);
      }
    }

    for(const line of lines)
    {
    }
  }

}
