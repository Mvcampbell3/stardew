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

  selectedVillager: NPC = null;
  showProfile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  pickVillager(e) {
    console.log(e)
    this.selectedVillager = this.villagers.filter(villager => villager.name === e)[0];
    this.showProfile = true;
    console.log(this.selectedVillager)
  }

  closeProfileRun() {
    console.log('running closeProfileFunction')
    this.selectedVillager = null;
    this.showProfile = false;
  }

}
