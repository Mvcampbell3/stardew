import { Component, OnInit, Input } from '@angular/core';
import { NPC } from '../../models/NPC';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  over: boolean = false;

  @Input() npc: NPC;

  constructor() { }

  ngOnInit() {
  }

  // testMouse(e) {
  //   if (!this.over) {
  //     const name = e.target.dataset.which;
  //     e.target.classList.add('higher');
  //     const rightDiv = document.querySelector(`.${name}`);
  //     console.log(rightDiv)
  //     rightDiv.className = `info-box ani show ${name}`
  //     console.log('mouse enter')
  //     this.over = true;
  //   }
  // }

  // testOut(e) {
  //   console.log('mouse leave')
  //   e.target.classList.remove('higher')
  //   const name = e.target.dataset.which;
  //   const rightDiv = document.querySelector(`.${name}`);
  //   rightDiv.className = `info-box ani shrink ${name}`
  //   this.over = true;

  //   this.over = false;
  // }
}
