import { Component, OnInit, Input } from '@angular/core';
import { NPC } from '../../models/NPC';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() npc: NPC;

  constructor() { }

  ngOnInit() {
  }

}
