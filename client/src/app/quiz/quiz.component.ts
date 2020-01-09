import { Component, OnInit } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  newDBPlayer: boolean = true;
  initLoad: boolean = true;
  player: Player = { name: '', gamertag: '', platform: '' };
  systems: string[] = ['PS4', 'Steam', 'Xbox', 'Switch']


  constructor() { }

  ngOnInit() {
  }

  changeDBplayer() {
    console.log('changing player')
    this.newDBPlayer = !this.newDBPlayer;
  }

  testme() {
    console.log(this.player)
  }

  submitPlayer() {
    console.log(this.player)
  }
}
