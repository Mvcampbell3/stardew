import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NPC } from '../models/NPC';
import villagers from '../models/npcSeed';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  item: any;
  villager: NPC;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('excuse me')

    this.getSearch();

    setTimeout(() => {
      console.log(this.item);
    }, 2000)
  }

  getSearch() {
    this.item = this.route.snapshot.paramMap.get('item');
    console.log(this.route.snapshot.paramMap.get('item'))
    this.grabData(this.item);
  }

  grabData(item) {
    const rightVillager = villagers.filter(villager => villager.name.toLowerCase() === item.toLowerCase())[0];
    console.log(rightVillager)
    if (rightVillager) {
      console.log('succesful villager find')
      this.villager = rightVillager;
    }
  }


}
