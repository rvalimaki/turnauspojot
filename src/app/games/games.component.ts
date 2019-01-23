import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { TitleService } from '../title.service';
import { Subscription } from 'rxjs';
import { Helpers } from '../top-scorers/helpers';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() title = 'Pelit';

  constructor(private db: AngularFireDatabase, private titleService: TitleService) {
  }

  teams: any[] = [];
  games: any[] = [];
  players: any[] = [];

  private playerSubscription: Subscription;
  private teamSubscription: Subscription;
  private gameSubscription: Subscription;

  ngOnInit() {
    this.titleService.title = this.title;

    this.gameSubscription = this.db.list('games').valueChanges().subscribe(
      games => {
        this.games = games;

        this.sortGames();
      });

    this.playerSubscription = this.db.list('players').valueChanges().subscribe(
      players => {
        this.players = players;
      }
    );

    this.teamSubscription = this.db.list('teams').valueChanges().subscribe(
      teams => {
        this.teams = teams;
      }
    );
  }

  teamAbbr(team: string) {
    return Helpers.teamAbbreviation(team);
  }


  private sortGames() {
    this.games.sort((a, b) => a.id.localeCompare(b.id, [], {numeric: true}));
  }
}
