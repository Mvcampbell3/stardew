import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NPC } from '../models/NPC';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profile: NPC;
  @Output() closeProfile = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeProfileSend() {
    console.log('click close btn')
    this.closeProfile.emit(true)
  }

}
