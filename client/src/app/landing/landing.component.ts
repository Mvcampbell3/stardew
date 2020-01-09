import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import { NPC } from '../npc';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  npcGroup: NPC[] = [];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.getNPCs()
  }

  getNPCs() {
    this.http.getNPCs().subscribe(
      (data: { npcs: NPC[] }) => {
        console.log(data)
        this.npcGroup = data.npcs;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
}
