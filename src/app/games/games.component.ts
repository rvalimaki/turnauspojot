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
  events: any[] = [];

  eventsDict = {};

  latestGame = '-0';

  private playerSubscription: Subscription;
  private teamSubscription: Subscription;
  private gameSubscription: Subscription;
  private eventSubscription: Subscription;

  ngOnInit() {
    if (this.title != null) {
      this.titleService.title = this.title;
    }

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

    this.eventSubscription = this.db.list('events').valueChanges().subscribe(
      events => {
        this.events = events;
        this.events.sort((a, b) => a.id.localeCompare(b.id, [], {numeric: true}));

        this.eventsDict = {};
        this.latestGame = '-0';

        for (const e of this.events) {
          e.date = isNaN(e.timestamp) ? null : new Date(e.timestamp);

          if (this.eventsDict[e.gameId] == null) {
            this.eventsDict[e.gameId] = [];

            this.latestGame = e.gameId;
          }

          this.eventsDict[e.gameId].push(e);
        }

      }
    );
  }

  teamAbbr(team: string) {
    return Helpers.teamAbbreviation(team);
  }

  teamLogo(team: string) {
    return Helpers.teamLogo(team);
  }


  private sortGames() {
    this.games.sort((a, b) => a.id.localeCompare(b.id, [], {numeric: true}));
  }

  lastEvent(id: any) {
    const events = this.eventsDict[id];
    if (events == null) {
      return null;
    }

    return events[events.length - 1];
  }
}
