import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NPC } from '../../models/NPC';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  over: boolean = false;

  @Input() npc: NPC;
  @Output() selected = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  setSelected(e) {
    this.selected.emit(e.target.dataset.which)
  }
}
