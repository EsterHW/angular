import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule ,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
  }

  
 
  


