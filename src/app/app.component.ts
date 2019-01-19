import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private db: AngularFireDatabase) {
  }

  teams: any[] = [];
  games: any[] = [];
  players: any[] = [];

  private playerSubscription: Subscription;
  private teamSubscription: Subscription;
  private gameSubscription: Subscription;


  ngOnInit() {
    this.gameSubscription = this.db.list('games').valueChanges().subscribe(
      games => {
        this.games = games;
      });

    this.playerSubscription = this.db.list('players').valueChanges().subscribe(
      players => {
        this.players = players;

        this.sortPlayers();

      }
    );

    this.teamSubscription = this.db.list('teams').valueChanges().subscribe(
      teams => {
        this.teams = teams;

      }
    );
  }

  private sortPlayers() {
    this.players.sort((a, b) => {
      if(b.points == null) return -1;
      if(a.points == null) return 1;

      if(a.points > b.points) return -1;
      if(a.points < b.points) return 1;

      if(a.goals > b.goals) return -1;
      if(a.goals < b.goals) return 1;

      if(a.primaryAssists > b.primaryAssists) return -1;
      if(a.primaryAssists < b.primaryAssists) return 1;

      if(a.penaltyMinutes > b.penaltyMinutes) return 1;
      if(a.penaltyMinutes < b.penaltyMinutes) return -1;

      if(a.number > b.number) return 1;
      if(a.number < b.number) return -1;

      if(a.team > b.team) return 1;
      if(a.team < b.team) return -1;

      return 0;
    });
  }
}
