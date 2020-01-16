import { Component, OnInit } from '@angular/core';
import villagers from '../models/npcSeed';
import { NPC } from '../models/NPC';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.scss']
})
export class VillagersComponent implements OnInit {

  marry_villagers: NPC[] = villagers.filter(villager => villager.marriable === true);
  non_marry_villagers: NPC[] = villagers.filter(villager => villager.marriable === false)

  selectedVillager: NPC = null;
  showProfile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  pickVillager(e) {
    console.log(e)
    this.selectedVillager = villagers.filter(villager => villager.name === e)[0];
    this.showProfile = true;
    console.log(this.selectedVillager)
  }

  closeProfileRun() {
    console.log('running closeProfileFunction')
    this.selectedVillager = null;
    this.showProfile = false;
  }

}
