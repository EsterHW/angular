import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { subMark } from '../subMark.interface';

@Component({
  selector: 'app-sub-mark',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, FormsModule,NgClass],
  templateUrl: './sub-mark.component.html',
  styleUrl: './sub-mark.component.css'
})
export class SubMarkComponent {
 familyList : subMark[]=[
    {
        subject: "English", mark: 50 
    },
    {
        subject: "Tora", mark: 100 
    },
    {
        subject: "Geem", mark: 78 
    },
    {
        subject: "Hebrew", mark: 100 
    },
    {
       subject: "Math", mark: 90 
    },]
    markAvg = (familyList: subMark[] ) : number =>{
      let sum = 0;
      familyList.forEach(element => {
        sum += element.mark;
      });
      return sum/familyList.length;
    }

    avg : number = this.markAvg(this.familyList);
}
