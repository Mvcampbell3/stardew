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
  }

}
