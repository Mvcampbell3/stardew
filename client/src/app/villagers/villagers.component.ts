import { Component, OnInit } from '@angular/core';
import villagers from '../models/npcSeed';
import { NPC } from '../models/NPC';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.scss']
})
export class VillagersComponent implements OnInit {

  villagers: NPC[] = villagers;

  constructor() { }

  ngOnInit() {
  }

  

}
