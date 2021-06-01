import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  visibility : boolean = false;
  visibilityTwo: boolean = false;
  include: boolean = false;
  title = ''
  text = ''
  palindrome = ["ANNA","2123olwq,e1",123456,"vaav",12345512,0,"abc0","uwq21o","awq12efr","sis","stats"];
 
  onSave(){
    const secondsCounter = interval(3000);
    // Subscribe to begin publishing values
   secondsCounter.subscribe(() =>
    this.ngOnInit()
    );
   
  };
  ngOnInit(){
    let randomstring = '';
    while (randomstring.length < 1) {
        this.title = randomstring += this.palindrome[Math.floor(Math.random() * this.palindrome.length)];
    }
    function isNumeric(value: string) {
      return /^\d+$/.test(value);
    }
    for (let char of this.title) {
      if(char === '0'){
        this.text = this.title;
        this.include = true;
      }else{
        this.include = false;
      }
    }
      if(isNumeric(randomstring)){
        this.visibilityTwo = true;
      }else{
        this.visibilityTwo = false;
        
      }if(this.title === this.title.split('').reverse().join('')){
        this.visibility = true;

      }else{
        this.visibility = false;
      }
  }
  
}
