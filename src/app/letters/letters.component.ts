import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  @Input() word = '';

  letters = []

  userInput = ''

  constructor() {
  
   }

  ngOnInit(): void {
    this.letters = this.word.split('').map(l => ({
      letter: l,
      correct: false
    }))
  }

  sameLength(index: number): Boolean{
    const tempUserInput = this.userInput.split('')
    return !!tempUserInput[index];
  }

  handleCheckUserInput(values){
    this.userInput = values;
      for (let val in values){
        if (values[val] === this.letters[val]?.letter){
          this.letters[val].correct = true
        } else if (this.letters[val]) {
          this.letters[val].correct = false
        }
      }
    }
    
  }
