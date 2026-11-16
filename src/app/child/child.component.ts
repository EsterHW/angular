import { Component, Input } from '@angular/core';
import { t } from '../parent/t.interfface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() product: t = {name: ' ', company: ' ', description:' '  , price:15 , minus:3};
}
