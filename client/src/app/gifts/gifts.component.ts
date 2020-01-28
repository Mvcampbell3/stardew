import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import items from '../models/itemSeed';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {

  itemList: Item[] = items;

  constructor() { }

  ngOnInit() {
  }

}
