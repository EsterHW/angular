import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  
  mail: string = '';
  textMail: string = 'הכניסו את כתובת המייל שלכם';
  isLogged = false;
  inOver(e: any) {
    this.isLogged = true;
  }

  
  enterClick()
  {
    this.textMail =  this.mail+ " :כתובת המייל שנקלטה היא";
  }
  clickButton() {
    this.mail = this.mail +'@gmail.com';
    this.textMail = this.mail+" :כתובת המייל שנקלטה היא";
  }

  inOut(e: any) {
    this.isLogged = false;
  }

  letters = "";
  checkHebrew (e: any){

        let index = this.hebrewArr.indexOf(e.key);
        if(index > -1)
        {
            e.key = this.englishArr[index];
        }


    }

  hebrewArr = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י'];
  englishArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


}
