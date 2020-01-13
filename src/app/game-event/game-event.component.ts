import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-event',
  templateUrl: './game-event.component.html',
  styleUrls: ['./game-event.component.scss']
})
export class GameEventComponent implements OnInit {
  @Input() event: any = null;

  constructor() {
  }

  ngOnInit() {
  }

  getNumber(playerId: string) {
    if (playerId == null) return '?';

    return playerId.split('_').pop();
  }

  getPlayerName(playerId: string) {
    return '';
    if (playerId == null) return '?';

    return playerId;
  }
}
