import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import { NPC } from '../models/NPC';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  showAnimation: boolean = true;

  npcGroup: NPC[] = [];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.arrangeLetters()
    setTimeout(() => {
      this.arrangeBottomLetters();

    }, 100)
  }

  arrangeLetters() {
    const letters = [].slice.call(document.querySelectorAll('.letter'));
    console.log(letters);

    letters.forEach((letter, i) => {
      letter.style.width = '44px'
      letter.style.left = `${(44 * i)}px`;
      letter.style.top = `${0}px`;
      letter.style.transform = `translateY(${0 + (0 * i)}px)`;
      letter.style.opacity = '0';

      setTimeout(() => {
        letter.style.transform = `translateY(${100 + (5 * i)}px)`;
        letter.style.opacity = '1'
      }, 100*i)
    })

    
  }

  arrangeBottomLetters() {
    const seconds = [].slice.call(document.querySelectorAll('.lower'));
    console.log(seconds);
    seconds.forEach((letter, i) => {
      letter.style.width = '44px'

      letter.style.left = `${(44 * i)}px`;
      letter.style.top = `${0}px`;
      letter.style.transform = `translateY(${0 + (0 * i)}px)`;
      letter.style.opacity = '0';

      setTimeout(() => {
        letter.style.transform = `translateY(${150 + (5 * i)}px)`;
        letter.style.opacity = '1'
      }, 150*i)
    })
  }



}
