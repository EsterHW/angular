import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { t } from './t.interfface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  arr : t[] = [
    { name: 'מקרר', company: 'sharp', description:'עמיד', price:5000, minus: 1000},
    { name: 'מזגן', company: 'tadirun', description:'חזק', price:3000, minus: 500},
    { name: 'תנור', company: 'delongi', description:'מבודד', price:2500, minus: 350},
    { name: 'מקפיא', company: 'usa', description:'מצב שבת', price:1500, minus: 150}
      ];
}
