import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable()
export class TeamLogoService {
  private teamLogos: any = {};
  private teamSubscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.teamSubscription = this.db.list('teams').valueChanges().subscribe(
      teams => {
        for (const team of teams) {
          this.teamLogos[(<any>team).id] = (<any>team).logo;
        }
      }
    );
  }

  logo(teamId) {
    return this.teamLogos[teamId] != null ? this.teamLogos[teamId] : 'unknown.png';
  }
}
