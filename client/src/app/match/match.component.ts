import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NPC } from '../models/NPC';
import villagers from '../models/npcSeed';
import { Item } from '../models/item';
import items from '../models/itemSeed';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  item: any;
  villager: NPC;
  gift: Item;
  loading: boolean = true;
  failed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
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
    const rightVillager = villagers.filter(villager => villager.name.toLowerCase() === item.toLowerCase())[0] || null;
    // const rightItem = items.filter(gift => gift.name.toLowerCase() === item.toLowerCase())[0] || null;
    const rightItemSpaceless = items.filter(gift => gift.name.split(' ').join('').toLowerCase() === item.toLowerCase())[0];

    console.log(rightVillager)
    // console.log(rightItem)
    console.log(rightItemSpaceless)

    // if (rightVillager) {
    //   return this.villager = rightVillager
    // } else if (rightItem) {
    //   return this.gift = rightItem
    // } else if (rightItemSpaceless) {
    //   return this.gift = rightItem
    // } else {
    //   return console.log('grab data failed, ' + this.item)
    // }

    if (rightVillager) {
      console.log(rightVillager);
      return this.villager = rightVillager
    } else if (rightItemSpaceless) {
      console.log(rightItemSpaceless);
      return this.gift = rightItemSpaceless
    } else {
      this.failed = true;
      return console.log('grab data failed, ' + this.item)
    }
  }


}
