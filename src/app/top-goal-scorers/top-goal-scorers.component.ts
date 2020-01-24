import { Component, Input, OnInit } from '@angular/core';
import { Helpers } from '../top-scorers/helpers';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-top-goal-scorers',
  templateUrl: './top-goal-scorers.component.html',
  styleUrls: ['./top-goal-scorers.component.scss']
})
export class TopGoalScorersComponent implements OnInit {
  @Input() title = 'Maalitykit';
  @Input() limit = 100;

  constructor(private db: AngularFireDatabase, private titleService: TitleService) {
  }

  teams: any[] = [];
  games: any[] = [];
  players: any[] = [];

  private playerSubscription: Subscription;
  private teamSubscription: Subscription;
  private gameSubscription: Subscription;


  ngOnInit() {
    if (this.title != null) { this.titleService.title = this.title; }

    this.gameSubscription = this.db.list('games').valueChanges().subscribe(
      games => {
        this.games = games;
      });

    this.playerSubscription = this.db.list('players').valueChanges().subscribe(
      players => {
        this.players = (<any>players).filter(p => p.points != null && p.points > 0);

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
      if (b.goals == null) { return -1; }
      if (a.goals == null) { return 1; }

      if (a.goals > b.goals) { return -1; }
      if (a.goals < b.goals) { return 1; }

      if (a.points > b.points) { return -1; }
      if (a.points < b.points) { return 1; }

      if (a.primaryAssists > b.primaryAssists) { return -1; }
      if (a.primaryAssists < b.primaryAssists) { return 1; }

      if (a.penalties > b.penalties) { return 1; }
      if (a.penalties < b.penalties) { return -1; }

      if (a.number > b.number) { return 1; }
      if (a.number < b.number) { return -1; }

      if (a.team > b.team) { return 1; }
      if (a.team < b.team) { return -1; }

      return 0;
    });
  }

  teamAbbr(team: string) {
    return Helpers.teamAbbreviation(team);
  }

  teamLogo(team: string) {
    return Helpers.teamLogo(team);
  }
}